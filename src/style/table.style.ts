import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';
import {AppendStyleParams} from './interface';

export const injectTableStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    .${antPrefixCls}-table-wrapper {
        // 覆盖表头的 border
        .${antPrefixCls}-table-thead > tr > th {
            border-color: ${colors['gray-5']};
        }

        // Table 线性 hover 效果
        .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) {
            .${antPrefixCls}-table-tbody > tr > td {
                border-bottom-color: ${colors['gray-3']};
            }

            .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:hover > td,
            .${antPrefixCls}-table-tbody > tr > td.${antPrefixCls}-table-cell-row-hover {
                border-bottom-color: var(--panda-color-primary);
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

        // 隐藏标题栏之间的间距
        .${antPrefixCls}-table-thead > tr > th:not(:last-child):not(.${antPrefixCls}-table-selection-column):not(.${antPrefixCls}-table-row-expand-icon-cell):not([colspan])::before,
        .${antPrefixCls}-table-thead > tr > td:not(:last-child):not(.${antPrefixCls}-table-selection-column):not(.${antPrefixCls}-table-row-expand-icon-cell):not([colspan])::before {
            background-color: transparent;
        }
    }

    ${higherPriority ? '}' : ''}
`;
