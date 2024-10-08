import {HookAPI} from 'antd/es/modal/useModal';
import createRegion from '../utils/createRegion';

const modalInstanceRegion = createRegion<HookAPI>(undefined as unknown as HookAPI);

export const getModalInstance = modalInstanceRegion.getValue;

export const setModalInstance = modalInstanceRegion.set;
