import {ReactNode} from 'react';
import {message as AntdMessage, MessageArgsProps} from 'antd';
import {TypeOpen} from 'antd/es/message/interface';
import {getMessageInstance} from '../regions/messageInstance';
import {MessageContent} from './MessageContent';

type OnClose = () => void;

export interface MessageArgsPropsWithTitle extends MessageArgsProps {
    title?: ReactNode;
    showCloseIcon?: boolean;
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
    const nextShowCloseIcon = isArgs ? content.showCloseIcon : true;

    const nextContent = isArgs ? (
        content.title ? (
            <div className="panda-message-content-root">
                <div className="panda-message-title">{content.title}</div>
                <div className="panda-message-content">{content.content}</div>
            </div>
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
                showCloseIcon={nextShowCloseIcon}
            />
        ),
        duration: nextDuration,
        onClose: nextOnClose,
    };

    const messageInstance = getMessageInstance() ?? AntdMessage;
    const callback = messageInstance[type](antArgs);
    handleHideRef.value = callback;
    return callback;
};

export const message: MessageInstance = {
    info: factory('info'),
    success: factory('success'),
    error: factory('error'),
    warning: factory('warning'),
    loading: factory('loading'),
};
