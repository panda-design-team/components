import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from '../style/interface';

export const injectButtonStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => {
    const style = `
    /* 大小 */
    .${antPrefixCls}-btn {
        padding-left: var(--panda-padding-middle);
        padding-right: var(--panda-padding-middle);
        font-size: var(--panda-font-size-middle);
    }

    .${antPrefixCls}-btn.${antPrefixCls}-btn-sm {
        padding-left: var(--panda-padding-small);
        padding-right: var(--panda-padding-small);
        font-size: var(--panda-font-size-small);
    }

    .${antPrefixCls}-btn.${antPrefixCls}-btn-lg {
        padding-left: var(--panda-padding-large);
        padding-right: var(--panda-padding-large);
        font-size: var(--panda-font-size-large);
    }

    .${antPrefixCls}-btn.${antPrefixCls}-btn-inline-text {
        padding: unset;
        border: unset;
        height: unset;
    }

    /* 颜色 */
    .${antPrefixCls}-btn-default {
        background-color: var(--panda-color-light);
        color: var(--panda-color-text);
        border-color: var(--panda-color-border);

        &:not(:disabled):hover {
            color: var(--panda-color-hover);
            border-color: var(--panda-color-primary);
        }

        &[disabled] {
            background-color: var(--panda-color-disabled-bg);
            color: var(--panda-color-disabled);
            border-color: var(--panda-color-disabled-bg);
        }
    }

    .${antPrefixCls}-btn-primary {
        background-color: var(--panda-color-primary);
        color: var(--panda-color-light);
        border-color: var(--panda-color-primary);

        &:not(:disabled):hover {
            background-color: var(--panda-color-light);
            color: var(--panda-color-primary);
        }

        &[disabled] {
            background-color: var(--panda-color-disabled-bg);
            color: var(--panda-color-disabled);
            border-color: var(--panda-color-disabled-bg);
        }

        &.${antPrefixCls}-btn-dangerous {
            --panda-color-primary: #e62c4b;

            &:not(:disabled):hover {
                background-color: var(--panda-color-light);
                color: var(--panda-color-primary);
            }

            &[disabled] {
                background-color: var(--panda-color-disabled-bg);
                color: var(--panda-color-disabled);
                border-color: var(--panda-color-disabled-bg);
            }
        }
    }

    .${antPrefixCls}-btn-flat {
        background-color: var(--panda-color-flat);
        color: var(--panda-color-primary);
        border-color: var(--panda-color-flat);

        &:not(:disabled):hover {
            background-color: var(--panda-color-light);
            color: var(--panda-color-primary);
            border-color: var(--panda-color-primary);
        }

        &[disabled] {
            background-color: var(--panda-color-disabled-bg);
            color: var(--panda-color-disabled);
            border-color: var(--panda-color-disabled-bg);
        }
    }

    // text 不需要管 background 的 border
    .${antPrefixCls}-btn-inline-text {
        color: var(--panda-color-text);

        &:not(:disabled):hover {
            color: var(--panda-color-hover);
        }

        &[disabled] {
            color: var(--panda-color-disabled);
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

    .${antPrefixCls}-btn-primary:not([disabled]),
    .${antPrefixCls}-btn-flat:not([disabled]) {
        &:hover {
            border-color: transparent;
        }

        // 初始状态
        &::before,
        &::after {
            pointer-events: none;
            box-sizing: inherit;
            content: '';
            position: absolute;
            border: 1px solid transparent;
            width: 0;
            height: 0;
            border-radius: 2px;
        }

        // 左上角的起点
        &::before {
            top: -1px;
            right: unset;
            bottom: unset;
            left: -1px;
        }

        // 右下角的起点
        &::after {
            top: unset;
            right: -1px;
            bottom: -1px;
            left: unset;
        }

        // 终点状态
        &:hover::before,
        &:hover::after {
            width: calc(100% + 2px);
            height: calc(100% + 2px);
        }

        // 动画过程
        &:hover::before {
            border-top-color: var(--panda-color-primary);
            border-right-color: var(--panda-color-primary);
            transition: width var(--panda-transition-duration-half) ease-out, height var(--panda-transition-duration-half) ease-out var(--panda-transition-duration-half);
        }

        &:hover::after {
            border-bottom-color: var(--panda-color-primary);
            border-left-color: var(--panda-color-primary);
            transition: width var(--panda-transition-duration-half) ease-out, height var(--panda-transition-duration-half) ease-out var(--panda-transition-duration-half);
        }
    }
`;
    if (higherPriority) {
        injectGlobal`
            body {
                ${style}
            }
        `;
    }
    else {
        injectGlobal`
            ${style}
        `;
    }
};
