import {injectGlobal} from '@emotion/css';

export const injectMessageStyle = () => injectGlobal`
    .ant-message-notice-content {
        text-align: initial;
        position: relative;
        overflow: hidden;
    }
`;
