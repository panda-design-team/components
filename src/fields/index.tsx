import {ReactNode} from 'react';
import {cx, css} from '@emotion/css';
import {colors} from '../colors';

const rootCss = css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px 40px;
`;

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

interface Props<T> {
    className?: string;
    rows: RowsType<T>;
    dataSource?: T;
    emptyText?: ReactNode;
}

function Fields<T>({className, rows, dataSource, emptyText = '暂无数据'}: Props<T>) {
    return (
        <div className={cx(className, rootCss)}>
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

export default Fields;
