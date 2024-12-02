import {ReactNode, useMemo} from 'react';
import {theme} from 'antd';
import {css} from '@emotion/css';
import {HelpIcon} from '../HelpIcon';

const leftCss = css`
    display: flex;
    align-items: center;
`;

const titleCss = css`
    font-size: 16px;
`;

export interface SubTitleProps {
    noMarginTop?: boolean;
    noMarginBottom?: boolean;
    title?: string;
    left?: ReactNode;
    tip?: ReactNode;
    extraContent?: ReactNode;
}

export const SubTitle = ({
    noMarginTop = false,
    noMarginBottom = false,
    tip,
    title,
    left,
    extraContent,
}: SubTitleProps) => {
    const {token} = theme.useToken();

    const containerCss = useMemo(
        () => css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: ${noMarginTop ? 0 : 40}px;
            margin-bottom: ${noMarginBottom ? 0 : 20}px;

            :first-of-type {
                margin-top: ${noMarginTop ? 0 : 20}px;
            }
        `,
        [noMarginBottom, noMarginTop]
    );

    const barCss = useMemo(
        () => css`
            margin-right: 8px;
            width: 4px;
            height: 16px;
            background: ${token.colorPrimary};
            border-radius: ${token.borderRadius}px;
        `,
        [token.colorPrimary, token.borderRadius]
    );

    return (
        <div className={containerCss}>
            <div className={leftCss}>
                <div className={barCss} />
                {title && <div className={titleCss}>{title}</div>}
                {left}
                {tip && <HelpIcon marginLeft={10} tooltip={tip} />}
            </div>
            {extraContent}
        </div>
    );
};
