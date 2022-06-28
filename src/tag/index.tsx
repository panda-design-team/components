import * as React from 'react';
import cx from 'classnames';
import {Tag as AntdTag, TagProps as AntdTagProps} from 'antd';
import './index.global.less';

export type TagColor = 'default'
    | 'brand'
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

const colorMap: Record<TagColor, string> = {
    default: 'var(--color-gray-10)',
    gray: 'var(--color-gray-10)',
    brand: 'var(--color-brand-6)',
    error: 'var(--color-error-6)',
    success: 'var(--color-success-6)',
    warning: 'var(--color-warning-6)',
    disabled: 'var(--color-gray-6)',
    cyan: 'var(--color-cyan-6)',
    'light-purple': 'var(--color-light-purple-6)',
    magenta: 'var(--color-magenta-6)',
    gold: 'var(--color-gold-6)',
    steelblue: '#455d8a',
};

const lightenColorMap: Record<TagColor, string> = {
    default: 'var(--color-gray-3)',
    gray: 'var(--color-gray-3)',
    brand: 'var(--color-brand-1)',
    error: 'var(--color-error-1)',
    success: 'var(--color-success-1)',
    warning: 'var(--color-warning-1)',
    disabled: 'var(--color-gray-3)',
    cyan: 'var(--color-cyan-1)',
    'light-purple': 'var(--color-light-purple-1)',
    magenta: 'var(--color-magenta-1)',
    gold: 'var(--color-gold-1)',
    steelblue: '#e9ebef',
};

const getStyle = (type: TagType, colorType: TagColor) => {
    const color = colorMap[colorType] ?? 'var(--color-gray-10)';
    const lightenColor = lightenColorMap[colorType] ?? 'var(--color-gray-3)';
    switch (type) {
        case 'primary':
            return {color: 'var(--color-gray-1)', borderColor: color, backgroundColor: color};
        case 'flat':
            return {color, borderColor: lightenColor, backgroundColor: lightenColor};
        case 'bordered':
            return {color, borderColor: color};
        case 'border-default':
            return {color};
        case 'text-default':
            return {borderColor: lightenColor, backgroundColor: lightenColor};
    }
};

interface Props extends Omit<AntdTagProps, 'color'> {
    type: TagType;
    color?: TagColor;
    round?: boolean;
    disabled?: boolean;
    height?: number;
}

function Tag({
    disabled,
    type = 'flat',
    color: colorType = disabled ? 'disabled' : 'gray',
    round,
    height,
    className,
    style = {},
    ...props
}: Props) {
    const injectStyle = getStyle(type, colorType);
    const nextStyle = {height, lineHeight: height ? `${height - 2}px` : undefined, ...injectStyle, ...style};
    return (
        <AntdTag
            className={cx('panda-tag', {'panda-tag-round': round, 'panda-tag-disabled': disabled}, className)}
            style={nextStyle}
            {...props}
        />
    );
}

export default Tag;
