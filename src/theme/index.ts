import {ThemeConfig} from 'antd/es/config-provider/context';
import {colors} from '../colors';

// @panda-design/components 和 antd 的最新对应关系见：https://panda-design-team.github.io/
const theme: ThemeConfig = {
    token: {
        // ---- SeedToken ----
        colorPrimary: colors['gray-10'],
        colorSuccess: colors['success-6'],
        colorWarning: colors['warning-6'],
        colorError: colors['error-6'],
        colorInfo: colors['info-6'],
        colorTextBase: colors['gray-10'], // 并覆盖 NeutralColorMapToken
        // colorBgBase: undefined,

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
        // 黑色系列全部定制
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
    },
    components: {
        Button: {
            controlOutline: 'rgb(0 0 0 / 2%)',
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
            colorPrimary: colors['info-2'],
            colorTextLightSolid: 'inherit',
            // controlHeightSM: 28,
        },
        Tabs: {
            fontSizeSM: 14,
            fontSize: 16,
            fontSizeLG: 20,
            colorBorderSecondary: 'transparent',
        },
        Tooltip: {
            colorBgDefault: colors.white,
            colorTextLightSolid: 'inherit',
            colorBgSpotlight: colors.white,
        },
        Menu: {
            padding: 12,
            itemSelectedBg: colors['gray-2'],
        },
        Modal: {
            fontSizeHeading5: 20,
            marginSM: 16,
            marginXS: 12,
        },
        Badge: {
            colorPrimary: colors['info-6'],
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
    },
};

export default theme;
