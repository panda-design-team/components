import {MessageInstance} from 'antd/es/message/interface';
import createRegion from '../utils/createRegion';

const messageInstanceRegion = createRegion<MessageInstance>(undefined as unknown as MessageInstance);

export const getMessageInstance = messageInstanceRegion.getValue;

export const setMessageInstance = messageInstanceRegion.set;
