import {injectGlobal} from '@emotion/css';

export const appendButtonStyle = () => injectGlobal`
/* 布局 */
.panda-button {
    position: relative;
    // inline-flex 产生 text-decoration 问题，目前看解不了，所以采用和 antd 保持一致，至少不太坑，svg 的问题通过 svg 解决
    display: inline-block;
    height: var(--panda-height-middle);
    border-radius: var(--panda-border-radius);
    padding-left: var(--panda-padding-middle);
    padding-right: var(--panda-padding-middle);
    font-size: var(--panda-font-size-middle);
    cursor: pointer;
    background-color: var(--panda-color-light);
    border: 1px solid var(--panda-color-border);
    // 来自 antd 的神奇数字
    line-height: 1.5715;
    white-space: nowrap;
    // new in v5
    transition: none;

    &[disabled] {
        cursor: not-allowed;
    }

    // 临时
    > .panda-button-loading-icon,
    > .anticon,
    > svg {
        width: 1em;
        height: 1em;
        vertical-align: -0.125em;
        font-size: 16px;
        position: relative;
        top: 1px;
        line-height: 0;

        & + span {
            margin-left: 8px;
        }
    }
}

.panda-button.panda-button-text {
    height: auto;
    padding-left: 0;
    padding-right: 0;
    border: 0;
    background-color: transparent;

    > .panda-button-loading-icon + span,
    > .anticon + span,
    > svg + span {
        margin-left: 4px;
    }
}

// loading 状态规范暂无法实现，先保持 antd 默认

/* 大小 */
.panda-button.panda-button-primary.panda-button-small,
.panda-button.panda-button-default.panda-button-small {
    height: var(--panda-height-small);
    padding-left: var(--panda-padding-small);
    padding-right: var(--panda-padding-small);
    font-size: var(--panda-font-size-small);
}

.panda-button.panda-button-primary.panda-button-large,
.panda-button.panda-button-default.panda-button-large {
    height: var(--panda-height-large);
    padding-left: var(--panda-padding-large);
    padding-right: var(--panda-padding-large);
    font-size: var(--panda-font-size-large);
}

.panda-button.panda-button-text.panda-button-small {
    font-size: var(--panda-font-size-small);
}

/* 颜色 */
.panda-button {
    background-color: var(--panda-color-light);
    color: var(--panda-color-text);
    border: 1px solid var(--panda-color-border);
}

.panda-button.panda-button-default {
    background-color: var(--panda-color-light);
    color: var(--panda-color-text);
    border-color: var(--panda-color-border);

    &:hover {
        color: var(--panda-color-hover);
        border-color: var(--panda-color-primary);
    }

    &[disabled] {
        background-color: var(--panda-color-disabled-bg);
        color: var(--panda-color-disabled);
        border-color: var(--panda-color-disabled-bg);
    }
}

.panda-button.panda-button-primary {
    background-color: var(--panda-color-primary);
    color: var(--panda-color-light);
    border-color: var(--panda-color-primary);

    &:hover {
        background-color: var(--panda-color-light);
        color: var(--panda-color-primary);
    }

    &[disabled] {
        background-color: var(--panda-color-disabled-bg);
        color: var(--panda-color-disabled);
        border-color: var(--panda-color-disabled-bg);
    }
}

.panda-button.panda-button-flat {
    background-color: var(--panda-color-flat);
    color: var(--panda-color-primary);
    border-color: var(--panda-color-flat);

    &:hover {
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
.panda-button.panda-button-text {
    color: var(--panda-color-text);

    &:hover {
        color: var(--panda-color-hover);
    }

    &[disabled] {
        color: var(--panda-color-disabled);
    }
}

/* 动画 */
.panda-button.panda-button-primary:not([disabled]),
.panda-button.panda-button-flat:not([disabled]) {
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
        left: -1px;
    }

    // 右下角的起点
    &::after {
        bottom: -1px;
        right: -1px;
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

/* 加载 */
._private-button:not(._private-button-loading) {
    ._private-button-loading-icon {
        display: none;
    }
}

._private-button._private-button-loading {
    ._private-button-loading-icon {
        padding-right: 8px;
    }
}
`;
