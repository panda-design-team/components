import {CSSProperties} from 'react';
import cx from 'classnames';
import {Tag as AntdTag, TagProps as AntdTagProps} from 'antd';
import {colors} from '../colors';

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
        solid: colors['info-6'],
        light: colors['info-1'],
    },
    error: {
        solid: colors['error-6'],
        light: colors['error-1'],
    },
    success: {
        solid: colors['success-6'],
        light: colors['success-1'],
    },
    warning: {
        solid: colors['warning-6'],
        light: colors['warning-1'],
    },
    disabled: {
        solid: colors['gray-6'],
        light: colors['gray-3'],
    },
    cyan: {
        solid: colors['cyan-6'],
        light: colors['cyan-1'],
    },
    'light-purple': {
        solid: colors['light-purple-6'],
        light: colors['light-purple-1'],
    },
    magenta: {
        solid: colors['magenta-6'],
        light: colors['magenta-1'],
    },
    gold: {
        solid: colors['gold-6'],
        light: colors['gold-1'],
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
    round?: boolean;
    disabled?: boolean;
    height?: number;
}

export function createTag <K extends string>(colorMap?: Record<K, ColorOptions>) {
    const getStyle = (type: TagType, colorType: K | TagColor): React.CSSProperties => {
        // @ts-ignore
        const colorOptions: ColorOptions = colorMap?.[colorType] ?? defaultColorMap?.[colorType] ?? {};
        const {solid: color = colors['gray-10'], light: lightenColor = colors['gray-3']} = colorOptions;
        switch (type) {
            case 'primary':
                return {color: colors['gray-1'], borderColor: 'transparent', backgroundColor: color};
            case 'flat':
                return {color, borderColor: 'transparent', backgroundColor: lightenColor};
            case 'bordered':
                return {color, borderColor: color};
            case 'border-default':
                return {color};
            case 'text-default':
                return {borderColor: 'transparent', backgroundColor: lightenColor};
        }
    };

    function Tag({
        disabled,
        type = 'flat',
        color: colorType = disabled ? 'disabled' : 'gray',
        round,
        height,
        className,
        style = {},
        ...props
    }: Props<K>) {
        const injectStyle = getStyle(type, colorType);
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
