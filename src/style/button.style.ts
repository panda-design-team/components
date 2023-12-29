import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';
import {buttonAnimation} from '../css/button.css';
import {AppendStyleParams} from './interface';

export const injectButtonStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-btn.${antPrefixCls}-btn-text,
    .${antPrefixCls}-btn.${antPrefixCls}-btn-link {
        padding-left: 7px;
        padding-right: 7px;
    }

    .${antPrefixCls}-btn.${antPrefixCls}-btn-primary {
        --ant-color-text-light-solid: var(--ant-color-primary);
        --ant-color-primary-hover: ${colors.white};

        &.${antPrefixCls}-btn-dangerous {
            --ant-color-primary: ${colors['error-6']};
            --ant-color-error-hover: ${colors.white};
        }
    }

    .${antPrefixCls}-btn-default.panda-btn-flat {
        --ant-button-default-ghost-color: var(--ant-color-primary);
    }

    /* 这里优先级需要低一些，以不覆盖 disabled */
    .panda-btn-flat {
        background-color: var(--panda-color-flat);
        color: var(--panda-color-primary);
        border-color: var(--panda-color-flat);

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            background-color: ${colors.white};
            color: var(--panda-color-primary);
        }

        &.${antPrefixCls}-btn-dangerous {
            --ant-color-primary: ${colors['error-6']};
        }
    }

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
    .${antPrefixCls}-btn-default.panda-btn-flat {
        --ant-line-width: 0;
        overflow: hidden;

        :not(:disabled):not(.${antPrefixCls}-btn-disabled) {
            ${buttonAnimation};
        }
    }
    ${higherPriority ? '}' : ''}
`;
