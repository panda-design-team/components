import {Modal as AntdModal, ModalProps, ModalFuncProps} from 'antd';
import {ModalFunc} from 'antd/es/modal/confirm';
import {getModalInstance} from '../regions/modalInstance';

// @ts-expect-error 忽略 antd 暴露的 InternalPanelDoNotUseOrYouWillBeFired 熟悉
// width 在规范中为 400 | 600 | 800 | 960，但先保持灵活性
const Modal: typeof AntdModal = function Modal(props: ModalProps) {
    const nextProps: ModalProps = {...props, centered: props.centered ?? true, width: props.width ?? 600};
    return <AntdModal {...nextProps} />;
};

type ModalInstanceType = 'info' | 'success' | 'error' | 'warning' | 'confirm';

const factory = (type: ModalInstanceType): ModalFunc => {
    return props => {
        const modalInstance = getModalInstance() ?? AntdModal;
        return modalInstance[type]({...props, centered: props.centered ?? true});
    };
};

Modal.info = factory('info');
Modal.success = factory('success');
Modal.confirm = factory('confirm');
// @ts-expect-error antd 想要废弃这个，所以类型不通过
Modal.warn = factory('warn');
Modal.warning = factory('warning');
Modal.error = factory('error');

Modal.config = AntdModal.config;
Modal.useModal = AntdModal.useModal;
Modal.destroyAll = AntdModal.destroyAll;

export {Modal};
export type {ModalProps, ModalFuncProps};
