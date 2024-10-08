import {css} from '@emotion/css';
import {StyleParams} from '../types/style';
import {colors} from './colors';

export const getTableClassName = ({antPrefixCls, token}: StyleParams) => css`
    // 覆盖表头的 border
    .${antPrefixCls}-table-thead > tr > th {
        --ant-5-table-border-color: ${colors['gray-5']}
    }

    // Table 线性 hover 效果
    .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) {
        .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:hover > td,
        .${antPrefixCls}-table-tbody > tr > td.${antPrefixCls}-table-cell-row-hover {
            --ant-5-table-border-color: ${token.colorPrimary}
        }
    }

    // Table 的 sorter 紧跟标题，而非最右侧
    .${antPrefixCls}-table-column-has-sorters {
        .${antPrefixCls}-table-column-sorters {
            justify-content: initial;

            .${antPrefixCls}-table-column-title {
                flex: initial;
            }

            .${antPrefixCls}-table-column-sorter {
                margin-left: 8px;
            }
        }
    }

    // Table 的 filter 紧跟标题，而非最右侧
    .${antPrefixCls}-table-filter-column {
        justify-content: initial;

        .${antPrefixCls}-table-column-title {
            flex: initial;
        }

        .${antPrefixCls}-table-filter-trigger {
            margin-left: 8px;
        }
    }
`;
