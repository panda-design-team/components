import {css} from '@emotion/react';

export const buttonAnimation = css`
    :hover {
        border-color: transparent;
    }

    // 初始状态
    ::before,
    ::after {
        pointer-events: none;
        box-sizing: inherit;
        content: '';
        position: absolute;
        border: 1px solid transparent;
        width: 0;
        height: 0;
        border-radius: inherit;
    }

    // 左上角的起点
    ::before {
        top: -1px;
        right: unset;
        bottom: unset;
        left: -1px;
    }

    // 右下角的起点
    ::after {
        top: unset;
        right: -1px;
        bottom: -1px;
        left: unset;
    }

    // 终点状态
    :hover::before,
    :hover::after {
        width: calc(100% + 2px);
        height: calc(100% + 2px);
    }

    // 动画过程
    :hover::before {
        border-top-color: var(--panda-color-primary);
        border-right-color: var(--panda-color-primary);
        transition: width var(--panda-transition-duration-half) ease-out, height var(--panda-transition-duration-half) ease-out var(--panda-transition-duration-half);
    }

    :hover::after {
        border-bottom-color: var(--panda-color-primary);
        border-left-color: var(--panda-color-primary);
        transition: width var(--panda-transition-duration-half) ease-out, height var(--panda-transition-duration-half) ease-out var(--panda-transition-duration-half);
    }
`;
