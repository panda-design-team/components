import {injectGlobal} from '@emotion/css';
import {colors} from '../theme';
import {AppendStyleParams} from './interface';

export const injectTypographyStyle = ({antPrefixCls = 'ant', higherPriority, token}: AppendStyleParams) => injectGlobal`
    ${higherPriority ? 'body {' : ''}
    
    // 移除浏览器默认的 margin-top
    .${antPrefixCls}-typography {
        margin-top: 0;
    }

    .${antPrefixCls}-typography.${antPrefixCls}-typography-tertiary {
        color: ${colors['gray-7']};
    }

    .${antPrefixCls}-typography.${antPrefixCls}-typography-quaternary {
        color: ${colors['gray-6']};
    }

    .${antPrefixCls}-typography.${antPrefixCls}-typography-info {
        color: ${token.colorInfo};
    }

    .${antPrefixCls}-typography.${antPrefixCls}-typography-error {
        color: ${token.colorError};
    }
    
    ${higherPriority ? '}' : ''}
`;
