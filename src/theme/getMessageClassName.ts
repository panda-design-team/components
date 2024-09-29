import {css} from '@emotion/css';
import {AppendStyleParams} from '../types/style';
import {colors} from './colors';

export const getMessageClassName = ({antPrefixCls}: AppendStyleParams) => css`
    .${antPrefixCls}-message-notice-content {
        text-align: initial;
        position: relative;
        overflow: hidden;
    }

    .panda-message-content-root {
        display: inline-grid;
    }

    .panda-message-content {
        color: ${colors['gray-8']};
    }

    .panda-message-progress-bar {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 3px;
        transform-origin: left;
    }

    .panda-message-close {
        margin-left: 20px;
        color: ${colors['gray-8']};
        cursor: pointer;
    }
`;
