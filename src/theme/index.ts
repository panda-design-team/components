import {ThemeConfig} from 'antd/es/config-provider/context';
import {colors} from '../colors';

// 对 antd 5.1.1 生效
const theme: ThemeConfig = {
    token: {
        // ---- SeedToken ----
        colorPrimary: colors['gray-10'],
        colorSuccess: colors['success-6'],
        colorWarning: colors['warning-6'],
        colorError: colors['error-6'],
        colorInfo: colors['info-6'],
        // colorTextBase: undefined,
        // colorBgBase: undefined,
        borderRadius: 2,
        // font, line, motion, size, controlHeight, zIndex, opacityImage, wireframe 未列出，有需要可以自行研究

        // ---- NeutralColorMapToken ----
        // 暂时先保持 antd 规范，后续调整
        // colorTextBase: string;
        // colorBgBase: string;
        // colorText: string;
        // colorTextSecondary: string;
        // colorTextTertiary: string;
        // colorTextQuaternary: string;
        // colorFill: string;
        // colorFillSecondary: string;
        // colorFillTertiary: string;
        // colorFillQuaternary: string;
        // colorBgContainer: string;
        // colorBgElevated: string;
        // colorBgLayout: string;
        // colorBgSpotlight: string;
        // colorBorder: string;
        // colorBorderSecondary: string;

        // ---- ColorMapToken ----
        // 黑色系列全部定制
        colorPrimaryBg: colors['gray-3'], // 1
        colorPrimaryBgHover: colors['gray-3'], // 2
        colorPrimaryBorder: colors['gray-4'], // 3
        colorPrimaryBorderHover: colors['gray-10'], // 4 // 暂时只有 Slider 用了
        colorPrimaryHover: colors['gray-10'], // 5
        // colorPrimary: colors.black, // 6
        colorPrimaryActive: colors['gray-10'], // 7
        colorPrimaryTextHover: colors['gray-9'], // 8
        colorPrimaryText: colors['gray-10'], // 9
        colorPrimaryTextActive: colors['gray-9'], // 10

        // ---- CommonMapToken ----
        // borderRadius 统一为 2
        borderRadiusXS: 2,
        borderRadiusSM: 2,
        borderRadiusLG: 2,

        // ---- AliasToken ----
        colorSplit: 'transparent',
        // Button
        controlOutline: 'transparent',
        // Table
        colorFillAlter: 'transparent',
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
        },
        Tooltip: {
            colorBgDefault: colors.white,
            colorTextLightSolid: 'inherit',
        },
        Menu: {
            padding: 12,
            colorItemBgSelected: colors['gray-2'],
        },
        Modal: {
            fontSizeHeading5: 20,
            marginSM: 16,
            marginXS: 12,
        },
        Tag: {},
        Badge: {
            colorPrimary: colors['info-6'],
        },
    },
};

export default theme;
