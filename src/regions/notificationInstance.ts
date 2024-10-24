import {NotificationInstance} from 'antd/es/notification/interface';
import createRegion from '../utils/createRegion';

const notificationInstanceRegion = createRegion<NotificationInstance>(undefined as unknown as NotificationInstance);

export const getNotificationInstance = notificationInstanceRegion.getValue;

export const setNotificationInstance = notificationInstanceRegion.set;
