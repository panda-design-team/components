import {css} from '@emotion/css';
import {StyleParams} from '../types/style';
import {getButtonAnimationStyleContent} from '../css/getButtonAnimationStyleContent';
import {colors} from './colors';

export const getModalClassName = ({antPrefixCls, token}: StyleParams) => css`
    &.${antPrefixCls}-modal .${antPrefixCls}-modal-footer .${antPrefixCls}-btn.${antPrefixCls}-btn-default:not(:disabled) {
        // 复制部分 flat 的样式
        background-color: ${colors['gray-3']};
        border-color: ${colors['gray-3']};

        :hover {
            background-color: ${token.colorWhite};
            color: ${token.colorPrimary};
        }

        // 动画
        ${getButtonAnimationStyleContent({borderColor: `var(--${antPrefixCls}-color-primary)`})};
    }
`;
