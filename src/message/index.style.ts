import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from '../style/interface';

export const injectMessageStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    
    .${antPrefixCls}-message-notice-content {
        text-align: initial;
        position: relative;
        overflow: hidden;
    }

    // message 暂时没有 token 可以修改
    .${antPrefixCls}-message-notice .${antPrefixCls}-message-notice-content {
        border-radius: 2px;
    }
    
    ${higherPriority ? '}' : ''}
`;
