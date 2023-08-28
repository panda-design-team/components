import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';
import {buttonAnimation} from '../css/button.css';
import {AppendStyleParams} from './interface';

export const injectButtonStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
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

    .${antPrefixCls}-btn.${antPrefixCls}-btn-text,
    .${antPrefixCls}-btn.${antPrefixCls}-btn-link {
        padding-left: 7px;
        padding-right: 7px;
    }

    /* 颜色 */
    .${antPrefixCls}-btn-default {
        background-color: var(--panda-color-light);
        color: var(--panda-color-text);
        border-color: var(--panda-color-border);

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
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
        border-width: 0;
        overflow: hidden;

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            background-color: var(--panda-color-light);
            color: var(--panda-color-primary);
        }

        &[disabled] {
            background-color: var(--panda-color-disabled-bg);
            color: var(--panda-color-disabled);
        }

        &.${antPrefixCls}-btn-dangerous {
            --panda-color-primary: #e62c4b;

            &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
                background-color: var(--panda-color-light);
                color: var(--panda-color-primary);
            }

            &[disabled] {
                background-color: var(--panda-color-disabled-bg);
                color: var(--panda-color-disabled);
            }
        }
    }

    .${antPrefixCls}-btn-flat {
        background-color: var(--panda-color-flat);
        color: var(--panda-color-primary);
        border-width: 0;
        overflow: hidden;

        &:not(:disabled):not(.${antPrefixCls}-btn-disabled):hover {
            background-color: var(--panda-color-light);
            color: var(--panda-color-primary);
        }

        &[disabled] {
            background-color: var(--panda-color-disabled-bg);
            color: var(--panda-color-disabled);
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

    .${antPrefixCls}-btn-primary:not(:disabled):not(.${antPrefixCls}-btn-disabled),
    .${antPrefixCls}-btn-flat:not(:disabled):not(.${antPrefixCls}-btn-disabled) {
        ${buttonAnimation};
    }
    ${higherPriority ? '}' : ''}
`;

