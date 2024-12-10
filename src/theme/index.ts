import {theme as antTheme, ConfigProviderProps} from 'antd';
import {ThemeConfig} from 'antd/es/config-provider/context';
import type {AliasToken} from 'antd/es/theme/interface';
import {setAntPrefixCls} from '../regions/antPrefixCls';
import {colors} from './colors';
import {getButtonClassName} from './getButtonClassName';
import {getButtonIconClassName} from './getButtonIconClassName';
import {getMenuClassName} from './getMenuClassName';
import {getMessageClassName} from './getMessageClassName';
import {getModalClassName} from './getModalClassName';
import {getSelectClassName} from './getSelectClassName';
import {getTableClassName} from './getTableClassName';
import {getTagClassName} from './getTagClassName';
import {getTreeClassName} from './getTreeClassName';
import {getTypographyClassName} from './getTypographyClassName';

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

interface Options {
    formatTheme?: FormatTheme;
    antPrefixCls?: string;
}

export const getConfigProviderProps = (seed?: Seed, options?: Options): ConfigProviderProps => {
    const {formatTheme, antPrefixCls} = options ?? {};
    if (antPrefixCls) {
        setAntPrefixCls(antPrefixCls);
    }
    const seedToken = getSeedToken(seed);
    const aliasToken = antTheme.getDesignToken({token: seedToken});
    const themeComponents: Exclude<ThemeConfig['components'], undefined> = {
        Button: {
            paddingInlineSM: 16, // from 7
            paddingInline: 20, // from 15
            paddingInlineLG: 24, // from 15
            defaultBorderColor: colors['gray-6'],
            colorBgContainerDisabled: colors['gray-3'],
            borderColorDisabled: colors['gray-3'],
            contentFontSizeSM: 12, // from 14
            contentLineHeightSM: 1.5, // from 1.5714285714285714
        },
        Table: {
            fontWeightStrong: 'normal' as unknown as number,
            headerBg: colors.white, // from #f0f0f0
            headerSplitColor: 'transparent', // from #f0f0f0
            rowHoverBg: colors.white, // from #fafafa
            borderColor: colors['gray-3'], // from #f0f0f0
            headerColor: colors['gray-7'], // from rgba(0, 0, 0, 0.88)
            cellPaddingBlock: 10, // from 16
            cellPaddingBlockMD: 10, // from 12 (保持 MD 要小于等于 LG)
            cellPaddingInline: 10, // from 16
        },
        Tree: {
            paddingXS: 0,
            colorPrimary: aliasToken.colorPrimaryBg,
            colorTextLightSolid: 'inherit',
            controlHeightSM: 28,
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
            colorTextLightSolid: colors.black,
            colorBgSpotlight: aliasToken.colorWhite,
        },
        Menu: {
            activeBarBorderWidth: 0, // from 1
            groupTitleFontSize: 12, // from 14
            itemMarginInline: 8, // from 4
            iconSize: 16, // from 14
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
    const themeInput: ConfigProviderProps['theme'] = {
        token: aliasToken,
        components: themeComponents,
        cssVar: true,
    };
    const themeResult = formatTheme ? formatTheme(themeInput) : themeInput;
    return {
        theme: themeResult,
        button: {
            className: getButtonClassName({antPrefixCls, token: aliasToken}),
            classNames: {icon: getButtonIconClassName()},
            autoInsertSpace: false,
        },
        menu: {
            className: getMenuClassName({antPrefixCls, token: aliasToken}),
        },
        message: {
            className: getMessageClassName({antPrefixCls, token: aliasToken}),
        },
        modal: {
            className: getModalClassName({antPrefixCls, token: aliasToken}),
        },
        select: {
            className: getSelectClassName({antPrefixCls, token: aliasToken}),
        },
        table: {
            className: getTableClassName({antPrefixCls, token: aliasToken}),
        },
        tag: {
            className: getTagClassName(),
        },
        tree: {
            className: getTreeClassName({antPrefixCls, token: aliasToken}),
        },
        typography: {
            className: getTypographyClassName({antPrefixCls, token: aliasToken}),
        },
    };
};
