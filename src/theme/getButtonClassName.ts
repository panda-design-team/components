import {css} from '@emotion/css';
import {StyleParams} from '../types/style';
import {getButtonAnimationStyleContent} from '../css/getButtonAnimationStyleContent';
import {colors} from './colors';

/* eslint-disable max-len */
export const getButtonClassName = ({antPrefixCls, token}: StyleParams) => css`
    &.${antPrefixCls}-btn.${antPrefixCls}-btn-text,
    &.${antPrefixCls}-btn.${antPrefixCls}-btn-link {
        padding-left: 7px;
        padding-right: 7px;
    }

    /* 这几个变量不能 theme 覆盖，会改变其他 type 的样式 */
    &.${antPrefixCls}-btn.${antPrefixCls}-btn-primary {
        --${antPrefixCls}-color-text-light-solid: var(--${antPrefixCls}-color-primary);
        --${antPrefixCls}-color-primary-hover: ${token.colorWhite};
        --${antPrefixCls}-color-primary-active: ${token.colorWhite};


        &.${antPrefixCls}-btn-dangerous {
            --${antPrefixCls}-color-primary: ${token.colorError};
            --${antPrefixCls}-color-error-hover: ${token.colorWhite};
            --${antPrefixCls}-color-error-active: ${token.colorWhite};
        }
        
        &.${antPrefixCls}-btn-background-ghost {
            --${antPrefixCls}-color-primary-hover: ${token.colorPrimaryHover};
        }
    }
    
    // 通过 where 降低优先级，这样恰好和一个 antd 的优先级一致并正好在后面。
    // 如改动这里，需要测试两个 case
    // 1. primary + gradient + hover
    // 2. primary + gradient + disabled
    &:where(.${antPrefixCls}-btn-primary.panda-btn-gradient) {
        background: linear-gradient(45deg, rgb(45, 112, 255), rgb(0, 223, 233));
    }

    &.${antPrefixCls}-btn-default.panda-btn-flat {
        --${antPrefixCls}-button-default-ghost-color: var(--${antPrefixCls}-color-primary);
    }

    /* 这里优先级需要低一些，以不覆盖 disabled */
    &.panda-btn-flat {
        --ant-5-button-default-bg: ${colors['gray-3']};
        --ant-5-button-default-border-color: ${colors['gray-3']};

        &.${antPrefixCls}-btn-dangerous {
            // 这是因为动画效果里用了 --antPrefixCls-color-primary
            --${antPrefixCls}-color-primary: ${token.colorError};
        }
    }

    &.${antPrefixCls}-btn-link {
        color: ${token.colorLink};

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            color: ${token.colorPrimaryActive};
            background-color: ${token.colorPrimaryBg};
        }
    }

    /* 动画 */
    &.${antPrefixCls}-btn {
        transition: none;

        &::before,
        &::after {
            animation: unset;
            opacity: unset;
            background-color: unset !important;
        }
    }

    &.${antPrefixCls}-btn-primary,
    &.${antPrefixCls}-btn-default.panda-btn-flat {
        --${antPrefixCls}-line-width: 0;
        overflow: hidden;

        :not(:disabled):not(.${antPrefixCls}-btn-disabled) {
            ${getButtonAnimationStyleContent({borderColor: `var(--${antPrefixCls}-color-primary)`})};
        }
    }

    &.${antPrefixCls}-btn-default.panda-btn-gradient:not(.panda-btn-flat) {
        --ant-5-button-default-bg: linear-gradient(to right, #ffffff, #ffffff) padding-box, linear-gradient(45deg, rgb(45, 112, 255), rgb(0, 223, 233)) border-box;
        --ant-5-button-default-border-color: transparent;
        --ant-5-button-default-color: ${token.colorPrimary};
    }
`;
