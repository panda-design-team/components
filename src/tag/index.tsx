import {CSSProperties} from 'react';
import cx from 'classnames';
import {Tag as AntdTag, TagProps as AntdTagProps} from 'antd';
import {colors, token} from '../theme/colors';

export type TagColor = 'default'
    | 'info'
    | 'error'
    | 'success'
    | 'warning'
    | 'disabled'
    | 'gray'
    | 'cyan'
    | 'light-purple'
    | 'magenta'
    | 'gold'
    | 'steelblue';

export type TagType = 'primary' | 'flat' | 'bordered' | 'border-default' | 'text-default';

export interface ColorOptions {
    solid: string;
    light: string;
}

export const defaultColorMap: Record<TagColor, ColorOptions> = {
    default: {
        solid: colors['gray-10'],
        light: colors['gray-3'],
    },
    gray: {
        solid: colors['gray-10'],
        light: colors['gray-3'],
    },
    info: {
        solid: token.colorInfo,
        light: token.colorInfoBg,
    },
    error: {
        solid: token.colorError,
        light: token.colorErrorBg,
    },
    success: {
        solid: token.colorSuccess,
        light: token.colorSuccessBg,
    },
    warning: {
        solid: token.colorWarning,
        light: token.colorWarningBg,
    },
    disabled: {
        solid: colors['gray-6'],
        light: colors['gray-3'],
    },
    cyan: {
        solid: '#00adcc',
        light: '#e6f9ff',
    },
    'light-purple': {
        solid: '#710bd6',
        light: '#f8edff',
    },
    magenta: {
        solid: '#de007e',
        light: '#ffebf4',
    },
    gold: {
        solid: '#d19d00',
        light: '#fff8e0',
    },
    steelblue: {
        solid: '#455d8a',
        light: '#e9ebef',
    },
};

interface ParamsCursorStyle {
    disabled?: boolean;
    hasOnClick?: boolean;
}

const getCursorStyle = ({disabled, hasOnClick}: ParamsCursorStyle): CSSProperties => {
    if (disabled) {
        return {cursor: 'not-allowed'};
    }
    if (hasOnClick) {
        return {cursor: 'pointer'};
    }
    return {};
};

interface Props<K> extends Omit<AntdTagProps, 'color'> {
    type: TagType;
    color?: K | TagColor;
    solid?: string;
    light?: string;
    round?: boolean;
    disabled?: boolean;
    height?: number;
}

export function createTag <K extends string>(colorMap?: Record<K, ColorOptions>) {
    interface StyleParams {
        type: TagType;
        colorType: K | TagColor;
        solid?: string;
        light?: string;
    }

    // eslint-disable-next-line complexity
    const getStyle = ({type, colorType, solid, light}: StyleParams): CSSProperties => {
        // @ts-ignore
        const colorOptions: ColorOptions = colorMap?.[colorType] ?? defaultColorMap?.[colorType] ?? {};
        const solidColor = solid ?? colorOptions?.solid ?? colors['gray-10'];
        const lightColor = light ?? colorOptions?.light ?? colors['gray-3'];
        switch (type) {
            case 'primary':
                return {color: colors['gray-1'], borderColor: 'transparent', backgroundColor: solidColor};
            case 'flat':
                return {color: solidColor, borderColor: 'transparent', backgroundColor: lightColor};
            case 'bordered':
                return {color: solidColor, borderColor: solidColor};
            case 'border-default':
                return {color: solidColor};
            case 'text-default':
                return {borderColor: 'transparent', backgroundColor: lightColor};
        }
    };

    function Tag({
        disabled,
        type = 'flat',
        color: colorType = disabled ? 'disabled' : 'gray',
        solid,
        light,
        round,
        height,
        className,
        style = {},
        ...props
    }: Props<K>) {
        const injectStyle = getStyle({type, colorType, solid, light});
        const injectCursorStyle = getCursorStyle({disabled, hasOnClick: Boolean(props.onClick)});
        const nextStyle = {height, lineHeight: height ? `${height - 2}px` : undefined, ...injectCursorStyle, ...injectStyle, ...style};
        return (
            <AntdTag
                className={cx('panda-tag', {'panda-tag-round': round, 'panda-tag-disabled': disabled}, className)}
                style={nextStyle}
                {...props}
            />
        );
    }
    return Tag;
}

export const Tag = createTag<TagColor>();
