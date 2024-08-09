import {injectGlobal} from '@emotion/css';
import {colors} from '../theme';
import {getButtonAnimationStyleContent} from '../css/button.css';
import {AppendStyleParams} from './interface';

export const injectButtonStyle = ({antPrefixCls = 'ant', higherPriority, token}: AppendStyleParams) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-btn.${antPrefixCls}-btn-text,
    .${antPrefixCls}-btn.${antPrefixCls}-btn-link {
        padding-left: 7px;
        padding-right: 7px;
    }

    /* 这几个变量不能 theme 覆盖，会改变其他 type 的样式 */
    .${antPrefixCls}-btn.${antPrefixCls}-btn-primary {
        --${antPrefixCls}-color-text-light-solid: var(--${antPrefixCls}-color-primary);
        --${antPrefixCls}-color-primary-hover: ${token.colorWhite};
        --${antPrefixCls}-color-primary-active: ${token.colorWhite};

        &.${antPrefixCls}-btn-dangerous {
            --${antPrefixCls}-color-primary: ${token.colorError};
            --${antPrefixCls}-color-error-hover: ${token.colorWhite};
            --${antPrefixCls}-color-error-active: ${token.colorWhite};
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
            background-color: ${token.colorWhite};
            color: ${token.colorPrimary};
        }

        &.${antPrefixCls}-btn-dangerous {
            --${antPrefixCls}-color-primary: ${token.colorError};
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
            ${getButtonAnimationStyleContent(token)};
        }
    }

    .${antPrefixCls}-btn-primary.panda-btn-gradient {
        --ant-5-color-primary: linear-gradient(45deg, rgb(45, 112, 255), rgb(0, 223, 233));
    }

    .${antPrefixCls}-btn-default.panda-btn-gradient:not(.panda-btn-flat) {
        --ant-5-button-default-bg: linear-gradient(to right, #ffffff, #ffffff) padding-box, linear-gradient(45deg, rgb(45, 112, 255), rgb(0, 223, 233)) border-box;
        --ant-5-button-default-border-color: transparent;
    }

    ${higherPriority ? '}' : ''}
`;
