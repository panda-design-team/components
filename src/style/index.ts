import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {injectBadgeStyle} from './badge.style';
import {injectButtonStyle} from './button.style';
import {appendIconStyle} from './icon.style';
import {injectMenuStyle} from './menu.style';
import {injectMessageStyle} from './message.style';
import {injectModalStyle} from './modal.style';
import {appendTagStyle} from './tag.style';
import {appendRootStyle} from './root.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';
import {injectSelectStyle} from './select.style';
import {injectTableStyle} from './table.style';
import {injectTabsStyle} from './tabs.style';
import {AppendStyleParams} from './interface';

// eslint-disable-next-line complexity
const appendInjectStyle = (options: AppendStyleParams) => {
    const {injectAll, inject} = options;
    if (injectAll || inject?.Badge) {
        injectBadgeStyle(options);
    }
    if (injectAll || inject?.Button) {
        injectButtonStyle(options);
    }
    if (injectAll || inject?.Menu) {
        injectMenuStyle(options);
    }
    if (injectAll || inject?.Message) {
        injectMessageStyle(options);
    }
    if (injectAll || inject?.Modal) {
        injectModalStyle(options);
    }
    if (injectAll || inject?.Select) {
        injectSelectStyle(options);
    }
    if (injectAll || inject?.Table) {
        injectTableStyle(options);
    }
    if (injectAll || inject?.Tabs) {
        injectTabsStyle(options);
    }
};

export const appendStyle = (options: AppendStyleParams = {}) => {
    const {antPrefixCls, resetLink} = options;

    if (antPrefixCls) {
        setAntPrefixCls(antPrefixCls);
    }
    appendRootStyle();
    appendLinkStyle();
    if (resetLink) {
        resetLinkStyle();
    }
    appendIconStyle();
    appendTagStyle();

    appendInjectStyle(options);
};
