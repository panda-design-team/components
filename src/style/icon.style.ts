import {injectGlobal} from '@emotion/css';
import {AppendStyleParams} from './interface';

export const appendIconStyle = ({antPrefixCls = 'ant'}: AppendStyleParams = {}) => injectGlobal`
    .panda-icon {
        width: 1em;
        height: 1em;
    }

    .${antPrefixCls}-btn {
        .panda-icon {
            font-size: 16px;
            position: relative;
            top: 1px;
        }
    }
`;
