import {injectButtonStyle} from '../button/index.style';
import {appendIconStyle} from '../icon/index.style';
import {injectMessageStyle} from '../message/index.style';
import {appendTagStyle} from '../tag/index.style';
import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {appendRootStyle} from './root.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';
import {AppendStyleParams} from './interface';

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
    if (inject?.Button !== false) {
        injectButtonStyle(options);
    }
    appendIconStyle();
    if (inject?.Message !== false) {
        injectMessageStyle(options);
    }
    appendTagStyle();
};
