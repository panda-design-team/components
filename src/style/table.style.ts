import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from './interface';

export const injectTableStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    
    // ant 对 last-child 有额外的覆盖
    .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:hover > td,
    .${antPrefixCls}-table-tbody > tr > td.${antPrefixCls}-table-cell-row-hover,
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:last-child:hover > td,
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row.${antPrefixCls}-table-row-selected:last-child > td{
        border-bottom-color: var(--panda-color-primary);
    }

    // 唯一一个就不显示边框了
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row:first-child:last-child:hover > td,
    .${antPrefixCls}-table-wrapper .${antPrefixCls}-table:not(.${antPrefixCls}-table-bordered) .${antPrefixCls}-table-tbody > tr.${antPrefixCls}-table-row.${antPrefixCls}-table-row-selected:first-child:last-child > td{
        border-bottom-color: transparent;
    }
    ${higherPriority ? '}' : ''}
`;
