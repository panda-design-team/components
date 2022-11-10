import {appendButtonStyle} from '../button/index.style';
import {appendIconStyle} from '../icon/index.style';
import {injectMessageStyle} from '../message/index.style';
import {appendTagStyle} from '../tag/index.style';
import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {appendRootStyle} from './root.style';
import {appendLinkStyle} from './link.style';
import {AppendStyleParams} from './interface';

export const appendStyle = (options?: AppendStyleParams) => {
    if (options?.antPrefixCls) {
        setAntPrefixCls(options?.antPrefixCls);
    }
    appendRootStyle();
    appendLinkStyle();
    appendButtonStyle();
    appendIconStyle();
    injectMessageStyle(options);
    appendTagStyle();
};
