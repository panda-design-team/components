import * as React from 'react';
import styled from '@emotion/styled';
import {message as AntdMessage, MessageArgsProps} from 'antd';
import {ConfigOnClose, MessageType} from 'antd/es/message';
import {IconClose} from '../icons';

export interface MessageArgsPropsWithTitle extends MessageArgsProps {
    title?: React.ReactNode;
}

// eslint-disable-next-line max-len
export type MessageFunc = (content: React.ReactNode | MessageArgsPropsWithTitle, duration?: number, onClose?: ConfigOnClose) => MessageType;

interface MessageInstance {
    info: MessageFunc;
    success: MessageFunc;
    error: MessageFunc;
    warning: MessageFunc;
    loading: MessageFunc;
}

const typeMap: Record<keyof MessageInstance, string> = {
    info: 'var(--color-brand-6)',
    success: 'var(--color-success-6)',
    error: 'var(--color-error-6)',
    warning: 'var(--color-warning-6)',
    loading: 'var(--color-brand-6)',
};

const MessageProgressBar = styled.div<{type: keyof MessageInstance, duration: number}>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => typeMap[props.type] ?? 'var(--color-brand-6)'};
    animation: scaleX ${props => props.duration}s linear forwards;
    transform-origin: left;

    @keyframes scaleX {
        0% {
            transform: scaleX(1);
        }

        100% {
            transform: scaleX(0);
        }
    }
`;

const StyledIconClose = styled(IconClose)`
    margin-left: 20px;
`;

const InlineBlock = styled.div`
    display: inline-grid;
`;

const Description = styled.div`
    color: var(--color-gray-8);
`;

// 从 antd 复制来的
function isArgsProps(content: React.ReactNode | MessageArgsPropsWithTitle): content is MessageArgsPropsWithTitle {
    return (
        Object.prototype.toString.call(content) === '[object Object]'
        && !!(content as MessageArgsPropsWithTitle).content
    );
}

const factory = (type: keyof MessageInstance): MessageFunc => (content, duration, onClose) => {
    if (isArgsProps(content)) {
        const nextContent = content.title ? (
            <InlineBlock>
                <div>{content.title}</div>
                <Description>{content.content}</Description>
            </InlineBlock>
        ) : content.content;

        return AntdMessage[type]({
            ...content,
            content: (
                <>
                    <MessageProgressBar type={type} duration={content.duration ?? 3} />
                    {nextContent}
                    <StyledIconClose onClick={content.onClose} />
                </>
            ),
        });
    }
    return AntdMessage[type](
        <>
            <MessageProgressBar type={type} duration={duration ?? 3} />
            {content}
            <StyledIconClose onClick={onClose} />
        </>,
        duration,
        onClose
    );
};

const message: MessageInstance = {
    info: factory('info'),
    success: factory('success'),
    error: factory('error'),
    warning: factory('warning'),
    loading: factory('loading'),
};

export default message;
