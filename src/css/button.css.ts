import {css} from '@emotion/css';
import {colors} from '../theme/base';

export const getButtonAnimationStyleContent = () => `
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
        top: 0;
        right: unset;
        bottom: unset;
        left: 0;
    }

    // 右下角的起点
    ::after {
        top: unset;
        right: 0;
        bottom: 0;
        left: unset;
    }

    // 终点状态
    :hover::before,
    :hover::after {
        width: 100%;
        height: 100%;
    }

    // 动画过程
    :hover::before {
        border-top-color: ${colors.primary};
        border-right-color: ${colors.primary};
        transition: width .15s ease-out, height .15s ease-out .15s;
    }

    :hover::after {
        border-bottom-color: ${colors.primary};
        border-left-color: ${colors.primary};
        transition: width .15s ease-out, height .15s ease-out .15s;
    }
`;

export const getButtonAnimation = () => css`
    position: relative;
    cursor: pointer;
    
    ${getButtonAnimationStyleContent()};
`;
