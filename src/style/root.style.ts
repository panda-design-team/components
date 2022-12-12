import {injectGlobal} from '@emotion/css';
import {colors} from '../colors';

export const appendRootStyle = () => injectGlobal`
    :root {
        // panda
        --panda-border-radius: 2px;
        --panda-font-size-small: 12px;
        --panda-font-size-middle: 14px;
        --panda-font-size-large: 16px;
        --panda-transition-duration-half: .15s;
        --panda-transition-duration: .3s;
        --panda-height-small: 28px;
        --panda-height-middle: 32px;
        --panda-height-large: 36px;
        --panda-padding-small: 16px;
        --panda-padding-middle: 20px;
        --panda-padding-large: 24px;
        --panda-color-primary: ${colors['gray-10']};
        --panda-color-light: ${colors['gray-1']};
        --panda-color-text: ${colors['gray-10']};
        --panda-color-dessription: ${colors['gray-8']};
        --panda-color-flat: ${colors['gray-3']};
        --panda-color-disabled-bg: ${colors['gray-3']};
        --panda-color-disabled: ${colors['gray-6']};
        --panda-color-hover: ${colors['gray-9']};
        --panda-color-border: ${colors['gray-6']};
        --panda-color-link: ${colors['info-8']};
    }
`;
