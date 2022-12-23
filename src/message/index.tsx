import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {message as AntdMessage, MessageArgsProps} from 'antd';
import {TypeOpen} from 'antd/es/message/interface';
import {MessageContent} from './MessageContent';

export interface MessageArgsPropsWithTitle extends MessageArgsProps {
    title?: ReactNode;
}

interface MessageInstance {
    info: TypeOpen;
    success: TypeOpen;
    error: TypeOpen;
    warning: TypeOpen;
    loading: TypeOpen;
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

const factory = (type: keyof MessageInstance): TypeOpen => (content, duration, onClose) => {
    const isArgs = isArgsProps(content);
    const durationAsDuration = typeof duration === 'function' ? undefined : duration;
    const nextDuration = isArgs ? content.duration : durationAsDuration;
    const durationAsOnClose = typeof duration === 'function' ? duration : undefined;
    const nextOnClose = isArgs ? content.onClose : (onClose ?? durationAsOnClose);
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
                content={content as ReactNode /* since in else */}
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
