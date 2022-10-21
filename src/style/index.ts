import {appendButtonStyle} from '../button/index.style';
import {appendIconStyle} from '../icon/index.style';
import {injectMessageStyle} from '../message/index.style';
import {appendTagStyle} from '../tag/index.style';
import {appendRootStyle} from './root.style';
import {appendLinkStyle} from './link.style';

export const appendStyle = () => {
    appendRootStyle();
    appendLinkStyle();
    appendButtonStyle();
    appendIconStyle();
    injectMessageStyle();
    appendTagStyle();
};
