import {message, Modal} from 'antd';
import {setMessageInstance} from '../regions/messageInstance';
import {setModalInstance} from '../regions/modalInstance';

// 提供全局的 message.info 和 Modal.confirm 方法
export const ContentHolder = () => {
    const [messageInstance, messageContextHolder] = message.useMessage();
    const [modalInstance, modalContextHolder] = Modal.useModal();
    setMessageInstance(messageInstance);
    setModalInstance(modalInstance);

    return (
        <>
            {messageContextHolder}
            {modalContextHolder}
        </>
    );
};
