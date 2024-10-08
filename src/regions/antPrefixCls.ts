import createRegion from '../utils/createRegion';

const antPrefixClsRegion = createRegion('ant');

export const getAntPrefixCls = antPrefixClsRegion.getValue;

export const setAntPrefixCls = antPrefixClsRegion.set;
