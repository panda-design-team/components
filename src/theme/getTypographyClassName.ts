import {css} from '@emotion/css';
import {StyleParams} from '../types/style';
import {colors} from './colors';

export const getTypographyClassName = ({antPrefixCls, token}: StyleParams) => css`
    // 移除浏览器默认的 margin-top
    &.${antPrefixCls}-typography {
        margin-top: 0;
    }

    &.${antPrefixCls}-typography.${antPrefixCls}-typography-tertiary {
        color: ${colors['gray-7']};
    }

    &.${antPrefixCls}-typography.${antPrefixCls}-typography-quaternary {
        color: ${colors['gray-6']};
    }

    &.${antPrefixCls}-typography.${antPrefixCls}-typography-info {
        color: ${token.colorInfo};
    }

    &.${antPrefixCls}-typography.${antPrefixCls}-typography-error {
        color: ${token.colorError};
    }
`;
