import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {AppendStyleParams} from '../types/style';
import {appendIconStyle} from './icon.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';

export const appendStyle = (options: AppendStyleParams) => {
    const {antPrefixCls, resetLink} = options;

    if (antPrefixCls) {
        setAntPrefixCls(antPrefixCls);
    }
    appendLinkStyle(options);
    appendIconStyle();
    if (resetLink) {
        resetLinkStyle();
    }
};
