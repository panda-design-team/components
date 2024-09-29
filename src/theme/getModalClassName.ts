import {css} from '@emotion/css';
import {AppendStyleParams} from '../types/style';
import {getButtonAnimationStyleContent} from '../css/button.css';
import {colors} from './colors';

export const getModalClassName = ({antPrefixCls, token}: AppendStyleParams) => css`
    &.${antPrefixCls}-modal .${antPrefixCls}-modal-footer .${antPrefixCls}-btn.${antPrefixCls}-btn-default:not(:disabled) {
        // 复制部分 flat 的样式
        background-color: ${colors['gray-3']};
        border-color: ${colors['gray-3']};

        :hover {
            background-color: ${token.colorWhite};
            color: ${token.colorPrimary};
        }

        // 动画
        ${getButtonAnimationStyleContent(token)};
    }
`;
