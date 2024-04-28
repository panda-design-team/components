import {injectGlobal} from '@emotion/css';
import {getButtonAnimationStyleContent} from '../css/button.css';
import {colors} from '../colors';
import {AppendStyleParams} from './interface';

export const injectModalStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-modal .${antPrefixCls}-modal-footer .${antPrefixCls}-btn.${antPrefixCls}-btn-default:not(:disabled) {
        // 复制部分 flat 的样式
        background-color: var(--panda-color-flat);
        border-color: var(--panda-color-flat);

        :hover {
            background-color: ${colors.white};
            color: var(--panda-color-primary);
        }

        // 动画
        ${getButtonAnimationStyleContent({antPrefixCls})};
    }
    
    ${higherPriority ? '}' : ''}
`;
