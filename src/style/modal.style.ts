import {injectGlobal} from '@emotion/css';
import {buttonAnimation} from '../css/button.css';
import {AppendStyleParams} from './interface';

export const injectModalStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-modal .${antPrefixCls}-modal-footer .${antPrefixCls}-btn.${antPrefixCls}-btn-default:not(:disabled) {
        // 复制部分 flat 的样式
        background-color: var(--panda-color-flat);
        color: var(--panda-color-primary);
        border-color: var(--panda-color-flat);

        :hover {
            background-color: var(--panda-color-light);
            color: var(--panda-color-primary);
        }

        // 动画
        ${buttonAnimation};
    }
    
    ${higherPriority ? '}' : ''}
`;
