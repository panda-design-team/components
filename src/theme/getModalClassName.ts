import {css} from '@emotion/css';
import {StyleParams} from '../types/style';
import {getButtonAnimationStyleContent} from '../css/getButtonAnimationStyleContent';
import {colors} from './colors';

export const getModalClassName = ({antPrefixCls}: StyleParams) => css`
    .${antPrefixCls}-modal-footer,
    .${antPrefixCls}-modal-confirm-btns {
        .${antPrefixCls}-btn.${antPrefixCls}-btn-default:not(:disabled) {
            // 复制部分 flat 的样式
            --${antPrefixCls}-button-default-bg: ${colors['gray-3']};
            --${antPrefixCls}-button-default-border-color: ${colors['gray-3']};
            --${antPrefixCls}-line-width: 0;
            overflow: hidden;

            :not(:disabled):not(.${antPrefixCls}-btn-disabled) {
                ${getButtonAnimationStyleContent({borderColor: `var(--${antPrefixCls}-color-primary)`})};
            }
        }
    }
`;
