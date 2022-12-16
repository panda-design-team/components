import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from '../style/interface';

export const injectMessageStyle = ({antPrefixCls = 'ant', higherPriority}: AppendStyleParams = {}) => {
    const style = `
        .${antPrefixCls}-message-notice-content {
            text-align: initial;
            position: relative;
            overflow: hidden;
        }
    `;

    if (higherPriority) {
        injectGlobal`
            body {
                ${style}
            }
        `;
    }
    else {
        injectGlobal`
            ${style}
        `;
    }
};
