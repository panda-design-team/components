import {ReactNode} from 'react';
import {cx, css} from '@emotion/css';
import {colors} from '../theme';

const titleCss = css`
    color: ${colors['gray-8']};
`;

export interface RowType<T> {
    title: ReactNode;
    dataIndex: string;
    render?: (value: any, dataSource?: T) => ReactNode;
}

export type RowsType<T> = Array<RowType<T>>;

interface FieldItemProps {
    title: ReactNode;
    children: ReactNode;
}

const FieldItem = ({title, children}: FieldItemProps) => {
    return (
        <>
            <div className={titleCss}>{title}</div>
            <div>{children}</div>
        </>
    );
};

export interface FieldProps<T> {
    className?: string;
    column?: number;
    rows: RowsType<T>;
    dataSource?: T;
    emptyText?: ReactNode;
}

export function Fields<T>({className, column, rows, dataSource, emptyText = '暂无数据'}: FieldProps<T>) {
    const rootCss = css`
        display: grid;
        grid-template-columns: repeat(${column ?? 1}, auto 1fr);
        gap: var(--panda-fields-gap, 20px) 40px;
    `;

    return (
        <div className={cx(rootCss, className)}>
            {rows.map(({title, dataIndex, render}) => {
                // @ts-expect-error
                const value = dataSource?.[dataIndex];
                const key = dataIndex;
                return (
                    <FieldItem key={key} title={title}>
                        {(render ? render(value, dataSource) : value) ?? emptyText}
                    </FieldItem>
                );
            })}
        </div>
    );
}
