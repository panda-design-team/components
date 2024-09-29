import {css} from '@emotion/css';

export const getTagClassName = () => css`
    &.panda-tag.panda-tag-round {
        // 暂时这么写，如果手动定义 height 32px 以上会有问题
        border-radius: 16px;
    }

    &.panda-tag.panda-tag-disabled {
        cursor: not-allowed;
    }
`;
