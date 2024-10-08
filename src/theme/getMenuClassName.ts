import {css} from '@emotion/css';
import {StyleParams} from '../types/style';

export const getMenuClassName = ({antPrefixCls}: StyleParams) => css`
    &.${antPrefixCls}-menu .${antPrefixCls}-menu-item-group-title {
        padding: 16px 20px 4px 20px;
    }
`;
