import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';
import {AppendStyleParams} from './interface';

export const injectMessageStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    
    .${antPrefixCls}-message-notice-content {
        text-align: initial;
        position: relative;
        overflow: hidden;
    }

    .${antPrefixCls}-message-notice .${antPrefixCls}-message-notice-content {
        border-radius: var(--panda-border-radius);
    }
    
    .panda-message-content-root {
        display: inline-grid;
    }
    
    .panda-message-content {
        color: var(--panda-color-description);
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
    
    ${higherPriority ? '}' : ''}
`;
