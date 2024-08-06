import {theme} from 'antd';
import {ThemeConfig} from 'antd/es/config-provider/context';
import type {AliasToken} from 'antd/es/theme/interface';
import {colors, setColors, setToken, themeConfig} from './base';

export const seedTokenBlue: Partial<AliasToken> = {
    // ---- SeedToken ----
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.error,
    colorInfo: colors.info,
    colorLink: colors.link,
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

export const setThemeWithSeed = (seedToken: Partial<AliasToken>): void => {
    const aliasToken = theme.getDesignToken({token: seedToken});

    setColors({
        primary: aliasToken.colorPrimary,
        info: aliasToken.colorInfo,
        warning: aliasToken.colorWarning,
        success: aliasToken.colorSuccess,
        error: aliasToken.colorError,
        link: aliasToken.colorLink,
    });

    setToken(aliasToken);

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
            colorBgSpotlight: colors.white,
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
            colorPrimary: colors.info,
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

    themeConfig.token = aliasToken;
    themeConfig.components = themeComponents;
    themeConfig.cssVar = true;
};
