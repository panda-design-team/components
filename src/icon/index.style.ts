import {injectGlobal} from '@emotion/css';

injectGlobal`
// 临时方案，用在 14px 的上下文中
.panda-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
    font-size: 16px;
    position: relative;
    top: 1px;
    line-height: 0;
}
`;
