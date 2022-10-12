import * as React from 'react';
import styled from '@emotion/styled';
import {message as AntdMessage, MessageArgsProps} from 'antd';
import {MessageType} from 'antd/es/message';
import {MessageContent} from './MessageContent';

type OnClose = () => void;

export interface MessageArgsPropsWithTitle extends MessageArgsProps {
    title?: React.ReactNode;
}

export type MessageFunc = (
    content: React.ReactNode | MessageArgsPropsWithTitle,
    duration?: number,
    onClose?: OnClose
) => MessageType;

interface MessageInstance {
    info: MessageFunc;
    success: MessageFunc;
    error: MessageFunc;
    warning: MessageFunc;
    loading: MessageFunc;
}

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
    const isArgs = isArgsProps(content);
    const nextDuration = isArgs ? content.duration : duration;
    const nextOnClose = isArgs ? content.onClose : onClose;
    const handleHideRef = {value: () => {}};

    if (isArgs) {
        const nextContent = content.title ? (
            <InlineBlock>
                <div>{content.title}</div>
                <Description>{content.content}</Description>
            </InlineBlock>
        ) : content.content;

        const callback = AntdMessage[type]({
            ...content,
            content: (
                <MessageContent
                    type={type}
                    handlerRef={handleHideRef}
                    duration={nextDuration}
                    content={nextContent}
                    onClose={nextOnClose}
                />
            ),
        });
        handleHideRef.value = callback;
        return callback;
    }
    else {
        const callback = AntdMessage[type](
            <MessageContent
                type={type}
                handlerRef={handleHideRef}
                duration={nextDuration}
                content={content}
                onClose={nextOnClose}
            />,
            duration,
            onClose
        );
        handleHideRef.value = callback;
        return callback;
    }
};

const message: MessageInstance = {
    info: factory('info'),
    success: factory('success'),
    error: factory('error'),
    warning: factory('warning'),
    loading: factory('loading'),
};

export default message;
