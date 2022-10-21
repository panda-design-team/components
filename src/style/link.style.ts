import {injectGlobal} from '@emotion/css';

injectGlobal`
.panda-link {
    white-space: nowrap;

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
    text-decoration: none;

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
        color: var(--panda-color-disabled);
    }
}

.panda-link.panda-link-default {
    color: var(--panda-color-link);
}

.panda-link.panda-link-text {
    color: var(--panda-color-text);
}

/* ant 互操作性 */
.panda-link.panda-link-default,
.panda-link.panda-link-text {
    .panda-tag:hover {
        text-decoration: underline;
    }
}
`;