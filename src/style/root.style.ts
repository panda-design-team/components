import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';

export const appendRootStyle = () => injectGlobal`
    :root {
        --panda-color-primary: ${colors['gray-10']};
        --panda-color-flat: ${colors['gray-3']};
        --panda-color-link: ${colors['info-8']};
    }
`;
