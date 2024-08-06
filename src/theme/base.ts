import type {AliasToken} from 'antd/es/theme/interface';
import {ThemeConfig} from 'antd/es/config-provider/context';

export const colors = {
    'white': '#fff',
    'black': '#000',
    'gray-1': '#fff',
    'gray-2': '#f7f7f7',
    'gray-3': '#f2f2f2',
    'gray-4': '#e8e8e8',
    'gray-5': '#d9d9d9',
    'gray-6': '#bfbfbf',
    'gray-7': '#8f8f8f',
    'gray-8': '#5c5c5c',
    'gray-9': '#2e2e2e',
    'gray-10': '#000',
    'primary': '#035fff',
    'info': '#035fff',
    'warning': '#f58300',
    'success': '#00cc6d',
    'error': '#e62c4b',
    'link': '#0047b3',
};

export type Colors = typeof colors;

export type Color = keyof Colors;

export const setColors = (partialColors: Partial<Colors>) => {
    Object.assign(colors, partialColors);
};

export const token: AliasToken = {} as AliasToken;

export const setToken = (partialToken: AliasToken) => {
    Object.assign(token, partialToken);
};

export const themeConfig: ThemeConfig = {} as ThemeConfig;
