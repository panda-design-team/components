import {injectGlobal} from '@emotion/css';
import {StyleParams} from '../types/style';

export const appendIconStyle = () => injectGlobal`
    .panda-icon {
        width: 1em;
        height: 1em;
    }
`;
