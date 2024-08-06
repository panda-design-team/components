import createRegion from './createRegion';

const antPrefixClsRegion = createRegion('ant');

export const getAntPrefixCls = antPrefixClsRegion.getValue;

export const useAntPrefixCls = antPrefixClsRegion.useValue;

export const setAntPrefixCls = antPrefixClsRegion.set;
