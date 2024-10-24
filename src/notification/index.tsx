import {notification as AntdNotification} from 'antd';
import {NotificationInstance} from 'antd/es/notification/interface';
import {getNotificationInstance} from '../regions/notificationInstance';

const factory = (type: keyof NotificationInstance) => {
    return (props: any) => {
        const notificationInstance = getNotificationInstance() ?? AntdNotification;
        return notificationInstance[type](props);
    };
};

export const notification: typeof AntdNotification = {
    open: factory('open'),
    info: factory('info'),
    success: factory('success'),
    error: factory('error'),
    warning: factory('warning'),
    destroy: factory('destroy'),
    config: AntdNotification.config,
    useNotification: AntdNotification.useNotification,
    // eslint-disable-next-line no-underscore-dangle
    _InternalPanelDoNotUseOrYouWillBeFired: AntdNotification._InternalPanelDoNotUseOrYouWillBeFired,
};
