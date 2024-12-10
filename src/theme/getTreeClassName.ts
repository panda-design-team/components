import {css} from '@emotion/css';
import {StyleParams} from '../types/style';

export const getTreeClassName = ({antPrefixCls}: StyleParams) => css`
    &.${antPrefixCls}-tree-directory {
        margin: 0 8px;

        .${antPrefixCls}-tree-indent-unit {
            width: 14px;
        }

        .${antPrefixCls}-tree-node-content-wrapper {
            display: flex;
            width: 0;
            gap: 4px;
            
            .${antPrefixCls}-tree-iconEle {
                width: 20px;
            }
        }

        .${antPrefixCls}-tree-title {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
