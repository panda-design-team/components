import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {message as AntdMessage, MessageArgsProps} from 'antd';
import {TypeOpen} from 'antd/es/message/interface';
import {MessageContent} from './MessageContent';

type OnClose = () => void;

export interface MessageArgsPropsWithTitle extends MessageArgsProps {
    title?: ReactNode;
}

export type MessageTypeOpen = (
    content: ReactNode | MessageArgsPropsWithTitle,
    duration?: number,
    onClose?: OnClose
) => ReturnType<TypeOpen>;

interface MessageInstance {
    info: MessageTypeOpen;
    success: MessageTypeOpen;
    error: MessageTypeOpen;
    warning: MessageTypeOpen;
    loading: MessageTypeOpen;
}

const InlineBlock = styled.div`
    display: inline-grid;
`;

const Description = styled.div`
    color: var(--panda-color-description);
`;

// 从 antd 复制来的
function isArgsProps(content: ReactNode | MessageArgsPropsWithTitle): content is MessageArgsPropsWithTitle {
    return (
        Object.prototype.toString.call(content) === '[object Object]'
        && !!(content as MessageArgsPropsWithTitle).content
    );
}

const noop = () => {};

const factory = (type: keyof MessageInstance): MessageTypeOpen => (content, duration, onClose) => {
    const handleHideRef = {value: noop};
    const isArgs = isArgsProps(content);
    const nextDuration = isArgs ? content.duration ?? duration : duration;
    const durationAsOnClose = typeof duration === 'function' ? duration : undefined;
    const nextOnClose = isArgs ? content.onClose : (onClose ?? durationAsOnClose);

    const nextContent = isArgs ? (
        content.title ? (
            <InlineBlock>
                <div>{content.title}</div>
                <Description>{content.content}</Description>
            </InlineBlock>
        ) : content.content
    ) : content;

    const antArgs: MessageArgsProps = {
        ...(isArgs ? content : {}),
        content: (
            <MessageContent
                type={type}
                handlerRef={handleHideRef}
                duration={nextDuration}
                content={nextContent}
                onClose={nextOnClose}
            />
        ),
        duration: nextDuration,
        onClose: nextOnClose,
    };

    const callback = AntdMessage[type](antArgs);
    handleHideRef.value = callback;
    return callback;
};

const message: MessageInstance = {
    info: factory('info'),
    success: factory('success'),
    error: factory('error'),
    warning: factory('warning'),
    loading: factory('loading'),
};

export default message;
