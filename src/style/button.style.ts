import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';
import {buttonAnimation} from '../css/button.css';
import {AppendStyleParams} from './interface';

export const injectButtonStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    /* 大小 */
    .${antPrefixCls}-btn.${antPrefixCls}-btn-text,
    .${antPrefixCls}-btn.${antPrefixCls}-btn-link {
        padding-left: 7px;
        padding-right: 7px;
    }

    /* 边框，颜色 */
    .${antPrefixCls}-btn-primary,
    .panda-btn-flat {
        /* 这两个变量只能这里覆盖，因为其他类型的 Button 也可能使用 */
        --ant-color-text-light-solid: var(--ant-color-primary);
        --ant-color-primary-hover: ${colors.white};
        --ant-line-width: 0;
        overflow: hidden;

        &.${antPrefixCls}-btn-dangerous {
            --ant-color-primary: ${colors['error-6']};
            --ant-color-error-hover: ${colors.white};
        }
    }

    .panda-btn-flat {
        background-color: var(--panda-color-flat);
        color: var(--panda-color-primary);
        border-color: var(--panda-color-flat);

        :hover {
            background-color: ${colors.white};
            color: var(--panda-color-primary);
        }
    }

    // text | link 不需要管 background 的 border
    .${antPrefixCls}-btn-link {
        color: ${colors['info-8']};

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            color: ${colors['info-7']};
            background-color: ${colors['info-1']};
        }
    }

    /* 动画 */
    .${antPrefixCls}-btn {
        transition: none;

        &::before,
        &::after {
            animation: unset;
            opacity: unset;
        }
    }

    .${antPrefixCls}-btn-primary,
    .panda-btn-flat {
        :not(:disabled):not(.${antPrefixCls}-btn-disabled) {
            ${buttonAnimation};
        }
    }
    ${higherPriority ? '}' : ''}
`;
