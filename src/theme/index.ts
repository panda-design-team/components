import {theme} from 'antd';
import {ThemeConfig} from 'antd/es/config-provider/context';
import type {AliasToken} from 'antd/es/theme/interface';

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
};

const defaultColors = {
    'primary': '#035fff',
    'info': '#035fff',
    'warning': '#f58300',
    'success': '#00cc6d',
    'error': '#e62c4b',
    'link': '#0047b3',
};

interface Seed {
    colorPrimary?: string;
    colorInfo?: string;
    colorWarning?: string;
    colorSuccess?: string;
    colorError?: string;
    colorLink?: string;
}

export const seedTokenBlue: Partial<AliasToken> = {
    // ---- SeedToken ----
    colorPrimary: defaultColors.primary,
    colorSuccess: defaultColors.success,
    colorWarning: defaultColors.warning,
    colorError: defaultColors.error,
    colorInfo: defaultColors.info,
    colorLink: defaultColors.link,
    colorTextBase: colors['gray-10'], // 并覆盖 NeutralColorMapToken
    borderRadius: 4,

    // ---- ColorPalettes ----

    // ---- NeutralColorMapToken ----
    colorText: colors['gray-10'],
    colorTextSecondary: colors['gray-8'],
    colorTextTertiary: colors['gray-7'],
    colorTextQuaternary: colors['gray-6'],
    // colorFill: undefined,
    // colorFillSecondary: undefined,
    // colorFillTertiary: undefined,
    // colorFillQuaternary: undefined,
    // colorBgContainer: undefined,
    // colorBgElevated: undefined,
    // colorBgLayout: undefined,
    // colorBgSpotlight: undefined,
    // colorBorder: undefined,
    // colorBorderSecondary: undefined,

    // ---- ColorMapToken ----
    // ---- SizeMapToken ----
    // ---- HeightMapToken ----
    // ---- StyleMapToken ----

    // ---- FontMapToken ----
    fontSizeHeading1: 28,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,
    lineHeightHeading1: 1.5,
    lineHeightHeading2: 1.5,
    lineHeightHeading3: 1.5,
    lineHeightHeading4: 1.5,
    lineHeightHeading5: 22 / 14,

    // ---- CommonMapToken ----
    // ---- AliasToken ----
};

export const seenTokenBlack: Partial<AliasToken> = {
    ...seedTokenBlue,

    // ---- SeedToken ----
    colorPrimary: colors['gray-10'],

    // ---- ColorMapToken ----
    // 黑色系列定制了所有的 ColorMapToken
    colorPrimaryBg: colors['gray-3'], // 1
    colorPrimaryBgHover: colors['gray-3'], // 2
    colorPrimaryBorder: colors['gray-4'], // 3
    colorPrimaryBorderHover: colors['gray-10'], // 4 // 暂时只有 Slider 用了
    colorPrimaryHover: colors['gray-10'], // 5
    // colorPrimary: colors['gray-10'], // 6
    colorPrimaryActive: colors['gray-10'], // 7
    colorPrimaryTextHover: colors['gray-9'], // 8
    colorPrimaryText: colors['gray-10'], // 9
    colorPrimaryTextActive: colors['gray-9'], // 10
};

type FormatTheme = (theme: ThemeConfig) => ThemeConfig;

const getSeedToken = (seed?: Seed) => {
    if (seed?.colorPrimary === '#000' || seed?.colorPrimary === 'black') {
        return {
            ...seenTokenBlack,
            ...seed,
        };
    }
    return {
        ...seedTokenBlue,
        ...seed,
    };
};

export const getTheme = (seed?: Seed, formatTheme?: FormatTheme) => {
    const seedToken = getSeedToken(seed);
    const aliasToken = theme.getDesignToken({token: seedToken});
    const themeComponents: Exclude<ThemeConfig['components'], undefined> = {
        Button: {
            controlOutline: 'rgb(0 0 0 / 2%)',
            contentFontSizeSM: 14,
            paddingInlineSM: 16,
            paddingInline: 20,
            paddingInlineLG: 24,
            defaultBorderColor: colors['gray-6'],
            colorBgContainerDisabled: colors['gray-3'],
            borderColorDisabled: colors['gray-3'],
        },
        Table: {
            colorFillAlter: 'transparent',
            // 应该是 gray-3，但是 ant 内部实现与规范不符，所以把它的样式用 transparent 禁用
            colorBorderSecondary: 'transparent',
            colorTextHeading: colors['gray-7'],
            fontWeightStrong: 'unset' as unknown as number,
            padding: 10,
            paddingContentVerticalLG: 10,
            borderRadiusLG: 0,
        },
        Tree: {
            paddingXS: 0,
            colorPrimary: aliasToken.colorPrimaryBg,
            colorTextLightSolid: 'inherit',
            // controlHeightSM: 28,
        },
        Tabs: {
            titleFontSizeSM: 14,
            titleFontSize: 16,
            titleFontSizeLG: 20,
            margin: 0,
            horizontalItemPaddingSM: '8px 0 4px 0',
            horizontalItemPadding: '12px 0 4px 0',
            horizontalItemPaddingLG: '16px 0 6px 0',
            colorBorderSecondary: 'transparent',
            itemSelectedColor: colors.black,
        },
        Tooltip: {
            colorTextLightSolid: 'inherit',
            colorBgSpotlight: aliasToken.colorWhite,
        },
        Menu: {
            padding: 12,
            itemSelectedBg: aliasToken.colorPrimaryBg,
        },
        Modal: {
            fontSizeHeading5: 20,
            marginSM: 16,
            marginXS: 12,
        },
        Badge: {
            colorPrimary: aliasToken.colorInfo,
            dotSize: 8,
        },
        Typography: {
            fontWeightStrong: 500,
            colorTextDescription: colors['gray-8'],
            titleMarginTop: 0,
            titleMarginBottom: 0,
        },
        Descriptions: {
            colorText: colors['gray-8'],
        },
    };
    const result = {
        token: aliasToken,
        components: themeComponents,
        cssVar: true,
    };
    return formatTheme ? formatTheme(result) : result;
};
