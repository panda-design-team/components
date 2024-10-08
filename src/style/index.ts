import {AliasToken} from 'antd/es/theme/interface';
import {appendIconStyle} from './icon.style';
import {appendLinkStyle, resetLinkStyle} from './link.style';

export interface AppendStyleParams {
    token: AliasToken;
    resetLink?: boolean;
}

export const appendStyle = (options: AppendStyleParams) => {
    const {resetLink} = options;
    appendLinkStyle(options);
    appendIconStyle();
    if (resetLink) {
        resetLinkStyle();
    }
};
