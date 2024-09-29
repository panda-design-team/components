import {CSSProperties} from 'react';
import cx from 'classnames';
import {Tag as AntdTag, TagProps as AntdTagProps, theme} from 'antd';
import {AliasToken} from 'antd/es/theme/interface';
import {colors} from '../theme/colors';

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

// eslint-disable-next-line complexity
export const getDefaultColor = (colorType: string, token: AliasToken): ColorOptions => {
    switch (colorType) {
        case 'default':
            return {solid: colors['gray-10'], light: colors['gray-3']};
        case 'gray':
            return {solid: colors['gray-10'], light: colors['gray-3']};
        case 'info':
            return {solid: token.colorInfo, light: token.colorInfoBg};
        case 'error':
            return {solid: token.colorError, light: token.colorErrorBg};
        case 'success':
            return {solid: token.colorSuccess, light: token.colorSuccessBg};
        case 'warning':
            return {solid: token.colorWarning, light: token.colorWarningBg};
        case 'disabled':
            return {solid: colors['gray-6'], light: colors['gray-3']};
        case 'cyan':
            return {solid: '#00adcc', light: '#e6f9ff'};
        case 'light-purple':
            return {solid: '#710bd6', light: '#f8edff'};
        case 'magenta':
            return {solid: '#de007e', light: '#ffebf4'};
        case 'gold':
            return {solid: '#d19d00', light: '#fff8e0'};
        case 'steelblue':
            return {solid: '#455d8a', light: '#e9ebef'};
        default:
            return {solid: colors['gray-10'], light: colors['gray-3']};
    }
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
        token: AliasToken;
    }

    // eslint-disable-next-line complexity
    const getStyle = ({type, colorType, solid, light, token}: StyleParams): CSSProperties => {
        // @ts-ignore
        const colorOptions: ColorOptions = colorMap?.[colorType] ?? getDefaultColor(colorType, token) ?? {};
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
        const {token} = theme.useToken();
        const injectStyle = getStyle({type, colorType, solid, light, token});
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
