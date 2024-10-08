import {message} from 'antd';
import {setMessageInstance} from './messageInstance';

export const MessageContentHolder = () => {
    const [messageInstance, contextHolder] = message.useMessage();
    setMessageInstance(messageInstance);

    return <>{contextHolder}</>;
};
