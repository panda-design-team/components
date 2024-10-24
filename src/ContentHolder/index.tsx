import {message, Modal, notification} from 'antd';
import {setMessageInstance} from '../regions/messageInstance';
import {setModalInstance} from '../regions/modalInstance';
import {setNotificationInstance} from '../regions/notificationInstance';

// 提供全局的 message.info 和 Modal.confirm 方法
export const ContentHolder = () => {
    const [messageInstance, messageContextHolder] = message.useMessage();
    const [modalInstance, modalContextHolder] = Modal.useModal();
    const [notificationInstance, notificationContextHolder] = notification.useNotification();
    setMessageInstance(messageInstance);
    setModalInstance(modalInstance);
    setNotificationInstance(notificationInstance);

    return (
        <>
            {messageContextHolder}
            {modalContextHolder}
            {notificationContextHolder}
        </>
    );
};
