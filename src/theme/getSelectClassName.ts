import {css} from '@emotion/css';
import {AppendStyleParams} from '../types/style';

export const getSelectClassName = ({antPrefixCls}: AppendStyleParams) => css`
    // Select 图标翻转
    &.${antPrefixCls}-select-open .${antPrefixCls}-select-arrow .anticon-down > svg {
        transform: rotate(180deg);
    }
`;
