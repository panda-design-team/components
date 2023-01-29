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
import {AppendStyleParams, InjectOptions} from './interface';

interface InjectParams {
    injectAll: boolean;
    inject?: InjectOptions;
    options?: AppendStyleParams;
}

// eslint-disable-next-line complexity
const appendInjectStyle = ({injectAll, inject, options}: InjectParams) => {
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

export const appendStyle = (options?: AppendStyleParams) => {
    const {antPrefixCls, resetLink, inject} = options ?? {};

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

    if (inject !== false) {
        appendInjectStyle({
            injectAll: inject === true || inject === undefined,
            inject: typeof inject === 'boolean' ? undefined : inject,
            options,
        });
    }
};
