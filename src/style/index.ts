import {injectButtonStyle} from '../button/index.style';
import {appendIconStyle} from '../icon/index.style';
import {injectMessageStyle} from '../message/index.style';
import {appendTagStyle} from '../tag/index.style';
import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {appendRootStyle} from './root.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';
import {AppendStyleParams} from './interface';

export const appendStyle = (options?: AppendStyleParams) => {
    if (options?.antPrefixCls) {
        setAntPrefixCls(options?.antPrefixCls);
    }
    appendRootStyle();
    appendLinkStyle();
    if (options?.resetLink) {
        resetLinkStyle();
    }
    injectButtonStyle(options);
    appendIconStyle();
    injectMessageStyle(options);
    appendTagStyle();
};
