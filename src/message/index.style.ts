import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from '../style/interface';

export const injectMessageStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    .${antPrefixCls}-message-notice-content {
        text-align: initial;
        position: relative;
        overflow: hidden;
    }
    ${higherPriority ? '}' : ''}
`;
