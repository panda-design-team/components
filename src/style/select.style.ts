import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from './interface';

export const injectSelectStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    // Select 图标翻转
    .${antPrefixCls}-select-open .${antPrefixCls}-select-arrow .anticon-down > svg {
        transform: rotate(180deg);
    }

    ${higherPriority ? '}' : ''}
`;
