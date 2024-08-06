import {injectGlobal} from '@emotion/css';
import {buttonAnimationStyleContent} from '../css/button.css';
import {colors, token} from '../theme/colors';
import {AppendStyleParams} from './interface';

export const injectModalStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-modal .${antPrefixCls}-modal-footer .${antPrefixCls}-btn.${antPrefixCls}-btn-default:not(:disabled) {
        // 复制部分 flat 的样式
        background-color: ${colors['gray-3']};
        border-color: ${colors['gray-3']};

        :hover {
            background-color: ${colors.white};
            color: ${token.colorPrimary};
        }

        // 动画
        ${buttonAnimationStyleContent};
    }
    
    ${higherPriority ? '}' : ''}
`;
