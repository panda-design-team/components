import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from './interface';

export const injectTabsStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => injectGlobal`
    ${higherPriority ? 'body {' : ''}

    // Tabs 下方间距置为 0
    .${antPrefixCls}-tabs-top > .${antPrefixCls}-tabs-nav,
    .${antPrefixCls}-tabs-bottom > .${antPrefixCls}-tabs-nav,
    .${antPrefixCls}-tabs-top > div > .${antPrefixCls}-tabs-nav,
    .${antPrefixCls}-tabs-bottom > div > .${antPrefixCls}-tabs-nav {
        margin-bottom: 0;
    }

    .${antPrefixCls}-tabs-content {
        font-size: 14px;
    }

    // Tabs
    .${antPrefixCls}-tabs-small {
        font-size: 14px;
    }
    .${antPrefixCls}-tabs-small > .${antPrefixCls}-tabs-nav .${antPrefixCls}-tabs-tab {
        font-size: 14px;
    }
    .${antPrefixCls}-tabs > .${antPrefixCls}-tabs-nav .${antPrefixCls}-tabs-tab {
        padding-bottom: 4px;
    }
    .${antPrefixCls}-tabs-large > .${antPrefixCls}-tabs-nav .${antPrefixCls}-tabs-tab {
        padding-bottom: 6px;
    }
    ${higherPriority ? '}' : ''}
`;
