import {css} from '@emotion/css';
import {AppendStyleParams} from '../types/style';

export const getMenuClassName = ({antPrefixCls}: AppendStyleParams) => css`
    &.${antPrefixCls}-menu .${antPrefixCls}-menu-item-group-title {
        padding: 16px 20px 4px 20px;
    }
`;
