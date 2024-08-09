import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from './interface';

export const injectMenuStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    
    .${antPrefixCls}-menu {
        transition: unset;
    }

    .${antPrefixCls}-menu-inline .${antPrefixCls}-menu-item,
    .${antPrefixCls}-menu-vertical .${antPrefixCls}-menu-item,
    .${antPrefixCls}-menu-inline .${antPrefixCls}-menu-submenu-title,
    .${antPrefixCls}-menu-vertical .${antPrefixCls}-menu-submenu-title {
        margin-inline: 8px;
        width: calc(100% - 16px);
    }

    .${antPrefixCls}-menu .${antPrefixCls}-menu-item-group-title {
        padding-top: 16px;
        padding-bottom: 4px;
        padding-left: 20px;
        font-size: 12px;
        line-height: 18px;
    }

    .${antPrefixCls}-menu .${antPrefixCls}-menu-item-group .${antPrefixCls}-menu-item-group-list .${antPrefixCls}-menu-item,
    .${antPrefixCls}-menu .${antPrefixCls}-menu-item-group .${antPrefixCls}-menu-item-group-list .${antPrefixCls}-menu-submenu-title {
        padding-inline: 12px;
    }

    .${antPrefixCls}-menu .${antPrefixCls}-menu-item .${antPrefixCls}-menu-item-icon,
    .${antPrefixCls}-menu .${antPrefixCls}-menu-submenu-title .${antPrefixCls}-menu-item-icon,
    .${antPrefixCls}-menu .${antPrefixCls}-menu-item .anticon,
    .${antPrefixCls}-menu .${antPrefixCls}-menu-submenu-title .anticon {
        font-size: 16px;
    }
    
    ${higherPriority ? '}' : ''}
`;
