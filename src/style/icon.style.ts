import {injectGlobal} from '@emotion/css';

export const appendIconStyle = () => injectGlobal`
    .panda-icon {
        width: 1em;
        height: 1em;
    }
`;
