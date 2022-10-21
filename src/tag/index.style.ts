import {injectGlobal} from '@emotion/css';

injectGlobal`
.panda-tag {
    // 临时
    > .panda-icon,
    > .anticon:not(.anticon-close) {
        width: 1em;
        height: 1em;
        vertical-align: -0.125em;
        font-size: 16px;
        position: relative;
        top: 1px;
        line-height: 0;

        & + span {
            margin-left: 4px;
        }
    }
}

.panda-tag.panda-tag-round {
    // 暂时这么写，如果手动定义 height 32px 以上会有问题
    border-radius: 16px;
}

.panda-tag.panda-tag-disabled {
    cursor: not-allowed;
}
`;
