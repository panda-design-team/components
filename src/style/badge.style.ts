import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from './interface';

export const injectBadgeStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    
    .${antPrefixCls}-badge.${antPrefixCls}-badge-status .${antPrefixCls}-badge-status-dot {
        width: 8px;
        height: 8px;
    }
    
    ${higherPriority ? '}' : ''}
`;
