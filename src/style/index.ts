import {injectButtonStyle} from '../button/index.style';
import {appendIconStyle} from '../icon/index.style';
import {injectMessageStyle} from '../message/index.style';
import {appendTagStyle} from '../tag/index.style';
import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {appendRootStyle} from './root.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';
import {injectTableStyle} from './table.style';
import {AppendStyleParams} from './interface';

export const appendStyle = (options?: AppendStyleParams) => {
    const {antPrefixCls, resetLink, defaultInject = true, inject} = options ?? {};

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

    const {
        Button: injectButton = defaultInject,
        Message: injectMessage = defaultInject,
        Table: injectTable = defaultInject,
    } = inject ?? {};

    if (injectButton) {
        injectButtonStyle(options);
    }
    if (injectMessage) {
        injectMessageStyle(options);
    }
    if (injectTable) {
        injectTableStyle(options);
    }
};
