import {css} from '@emotion/css';
import {StyleParams} from '../types/style';

export const getSelectClassName = ({antPrefixCls}: StyleParams) => css`
    // Select 图标翻转
    &.${antPrefixCls}-select-open .${antPrefixCls}-select-arrow .anticon-down > svg {
        transform: rotate(180deg);
    }
`;
