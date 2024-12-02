import {Tooltip} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {ReactNode} from 'react';
import {css, cx} from '@emotion/css';
import {marginLeft as getMarginLeftCss} from '../classNames';
import {colors} from '../theme/colors';

const iconCss = css`
    font-size: 16px;
    color: var(--panda-help-icon-color, ${colors['gray-7']});
    cursor: pointer;
`;

export interface HelpIconProps {
    marginLeft?: number;
    className?: string;
    tooltip?: ReactNode;
}

export const HelpIcon = ({marginLeft = 4, className, tooltip}: HelpIconProps) => {
    const nextClassName = cx(iconCss, getMarginLeftCss(marginLeft), className);

    if (!tooltip) {
        return <QuestionCircleOutlined className={nextClassName} />;
    }

    return (
        <Tooltip title={tooltip}>
            <QuestionCircleOutlined className={nextClassName} />
        </Tooltip>
    );
};
