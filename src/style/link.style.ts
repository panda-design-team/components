import {injectGlobal} from '@emotion/css';
import {colors} from '../theme/colors';
import {StyleParams} from '../types/style';

export const resetLinkStyle = () => injectGlobal`
    a {
        text-decoration: none;
    }
`;

export const appendLinkStyle = ({token}: StyleParams) => injectGlobal`
    /* 装饰 */
    .panda-link {
        white-space: nowrap;
        text-decoration: none;
    
        &[disabled] {
            cursor: not-allowed;
            text-decoration: none;
        }
    
        .panda-icon-external {
            margin-left: 4px;
        }
    }
    
    .panda-link.panda-link-default,
    .panda-link.panda-link-text {
        &:hover {
            text-decoration: underline;
        }
    
        &[disabled] {
            text-decoration: none;
        }
    }
    
    /* 颜色 */
    .panda-link.panda-link-default,
    .panda-link.panda-link-text {
        &[disabled] {
            color: ${colors['gray-6']};
        }
    }
    
    .panda-link.panda-link-default {
        color: ${token.colorLink};
    }
    
    .panda-link.panda-link-text {
        color: ${colors.black};
    }
    
    /* ant 互操作性 */
    .panda-link.panda-link-default,
    .panda-link.panda-link-text {
        .panda-tag:hover {
            text-decoration: underline;
        }
    }
`;
