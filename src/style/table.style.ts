import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';
import {AppendStyleParams} from './interface';

export const injectTableStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    // 覆盖表头的 border
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table-thead > tr > th {
        border-color: ${colors['gray-5']};
    }

    // 保证高度稳定
    .${antPrefixCls}-table-tbody > tr > td {
        //border-top: none;
        border-bottom: 1px solid ${colors['gray-3']};
    }
    
    // ant 对 last-child 有额外的覆盖
    .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:hover > td,
    .${antPrefixCls}-table-tbody > tr > td.${antPrefixCls}-table-cell-row-hover,
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:last-child:hover > td,
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row.${antPrefixCls}-table-row-selected:last-child > td{
        border-bottom-color: var(--panda-color-primary);
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
    
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table-thead >tr>th:not(:last-child):not(.${antPrefixCls}-table-selection-column):not(.${antPrefixCls}-table-row-expand-icon-cell):not([colspan])::before,
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table-thead >tr>td:not(:last-child):not(.${antPrefixCls}-table-selection-column):not(.${antPrefixCls}-table-row-expand-icon-cell):not([colspan])::before {
        background-color: transparent;
    }

    ${higherPriority ? '}' : ''}
`;
