import {setAntPrefixCls} from '../utils/antPrefixClsRegion';
import {injectButtonStyle} from './button.style';
import {injectMenuStyle} from './menu.style';
import {injectMessageStyle} from './message.style';
import {injectModalStyle} from './modal.style';
import {appendTagStyle} from './tag.style';
import {appendRootStyle} from './root.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';
import {injectSelectStyle} from './select.style';
import {injectTableStyle} from './table.style';
import {injectTypographyStyle} from './typography.style';
import {AppendStyleParams} from './interface';

// eslint-disable-next-line complexity
const appendInjectStyle = (options: AppendStyleParams) => {
    const {injectAll = true, inject} = options;
    if (inject?.Button ?? injectAll) {
        injectButtonStyle(options);
    }
    if (inject?.Menu ?? injectAll) {
        injectMenuStyle(options);
    }
    if (inject?.Message ?? injectAll) {
        injectMessageStyle(options);
    }
    if (inject?.Modal ?? injectAll) {
        injectModalStyle(options);
    }
    if (inject?.Select ?? injectAll) {
        injectSelectStyle(options);
    }
    if (inject?.Table ?? injectAll) {
        injectTableStyle(options);
    }
    if (inject?.Typography ?? injectAll) {
        injectTypographyStyle(options);
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
    appendTagStyle();

    appendInjectStyle(options);
};
