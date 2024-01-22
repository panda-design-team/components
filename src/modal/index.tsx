import {Modal as AntdModal, ModalProps, ModalFuncProps} from 'antd';

// @ts-expect-error 忽略 antd 暴露的 InternalPanelDoNotUseOrYouWillBeFired 熟悉
// width 在规范中为 400 | 600 | 800 | 960，但先保持灵活性
const Modal: typeof AntdModal = function Modal(props: ModalProps) {
    const nextProps: ModalProps = {...props, centered: props.centered ?? true, width: props.width ?? 600};
    return <AntdModal {...nextProps} />;
};

Modal.info = props => AntdModal.info({...props, centered: props.centered ?? true});
Modal.success = props => AntdModal.success({...props, centered: props.centered ?? true});
Modal.confirm = props => AntdModal.confirm({...props, centered: props.centered ?? true});
Modal.warn = props => AntdModal.warn({...props, centered: props.centered ?? true});
Modal.warning = props => AntdModal.warning({...props, centered: props.centered ?? true});
Modal.error = props => AntdModal.error({...props, centered: props.centered ?? true});

Modal.config = AntdModal.config;
Modal.useModal = AntdModal.useModal;
Modal.destroyAll = AntdModal.destroyAll;

export {Modal};
export type {ModalProps, ModalFuncProps};
