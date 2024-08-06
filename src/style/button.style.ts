import {injectGlobal} from '@emotion/css';
import {colors, token} from '../theme/base';
import {getButtonAnimationStyleContent} from '../css/button.css';
import {AppendStyleParams} from './interface';

export const injectButtonStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-btn.${antPrefixCls}-btn-text,
    .${antPrefixCls}-btn.${antPrefixCls}-btn-link {
        padding-left: 7px;
        padding-right: 7px;
    }

    /* 这几个变量不能 theme 覆盖，会改变其他 type 的样式 */
    .${antPrefixCls}-btn.${antPrefixCls}-btn-primary {
        --${antPrefixCls}-color-text-light-solid: var(--${antPrefixCls}-color-primary);
        --${antPrefixCls}-color-primary-hover: ${colors.white};
        --${antPrefixCls}-color-primary-active: ${colors.white};

        &.${antPrefixCls}-btn-dangerous {
            --${antPrefixCls}-color-primary: ${colors.error};
            --${antPrefixCls}-color-error-hover: ${colors.white};
            --${antPrefixCls}-color-error-active: ${colors.white};
        }
    }

    .${antPrefixCls}-btn-default.panda-btn-flat {
        --${antPrefixCls}-button-default-ghost-color: var(--${antPrefixCls}-color-primary);
    }

    /* 这里优先级需要低一些，以不覆盖 disabled */
    .panda-btn-flat {
        background-color: ${colors['gray-3']};
        border-color: ${colors['gray-3']};

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            background-color: ${colors.white};
            color: ${token.colorPrimary};
        }

        &.${antPrefixCls}-btn-dangerous {
            --${antPrefixCls}-color-primary: ${colors.error};
        }
    }

    .${antPrefixCls}-btn-link {
        color: ${token.colorLink};

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            color: ${token.colorPrimaryActive};
            background-color: ${token.colorPrimaryBg};
        }
    }

    /* 动画 */
    .${antPrefixCls}-btn {
        transition: none;

        &::before,
        &::after {
            animation: unset;
            opacity: unset;
            background-color: unset !important;
        }
    }

    .${antPrefixCls}-btn-primary,
    .${antPrefixCls}-btn-default.panda-btn-flat {
        --${antPrefixCls}-line-width: 0;
        overflow: hidden;

        :not(:disabled):not(.${antPrefixCls}-btn-disabled) {
            ${getButtonAnimationStyleContent()};
        }
    }

    .${antPrefixCls}-btn-primary.panda-btn-gradient {
        background: linear-gradient(45deg, rgb(45, 112, 255), rgb(0, 223, 233));
    }

    .${antPrefixCls}-btn-default.panda-btn-gradient:not(.panda-btn-flat) {
        background-clip: padding-box, border-box;
        background-image: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(45deg, rgb(45, 112, 255), rgb(0, 223, 233));
        background-origin: padding-box, border-box;
        border-color: transparent;
    }

    ${higherPriority ? '}' : ''}
`;
