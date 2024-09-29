import {message} from 'antd';
import {useEffect} from 'react';
import {setMessageInstance} from './messageInstance';

export const MessageContentHolder = () => {
    const [messageInstance, contextHolder] = message.useMessage();

    useEffect(
        () => {
            setMessageInstance(messageInstance);
        },
        [messageInstance]
    );

    return <>{contextHolder}</>;
};
