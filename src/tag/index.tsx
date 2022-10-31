import * as React from 'react';
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

const colorMap: Record<TagColor, string> = {
    default: colors['gray-10'],
    gray: colors['gray-10'],
    info: colors['info-6'],
    error: colors['error-6'],
    success: colors['success-6'],
    warning: colors['warning-6'],
    disabled: colors['gray-6'],
    cyan: colors['cyan-6'],
    'light-purple': colors['light-purple-6'],
    magenta: colors['magenta-6'],
    gold: colors['gold-6'],
    steelblue: '#455d8a',
};

const lightenColorMap: Record<TagColor, string> = {
    default: colors['gray-3'],
    gray: colors['gray-3'],
    info: colors['info-1'],
    error: colors['error-1'],
    success: colors['success-1'],
    warning: colors['warning-1'],
    disabled: colors['gray-3'],
    cyan: colors['cyan-1'],
    'light-purple': colors['light-purple-1'],
    magenta: colors['magenta-1'],
    gold: colors['gold-1'],
    steelblue: '#e9ebef',
};

const getStyle = (type: TagType, colorType: TagColor) => {
    const color = colorMap[colorType] ?? colors['gray-10'];
    const lightenColor = lightenColorMap[colorType] ?? colors['gray-3'];
    switch (type) {
        case 'primary':
            return {color: colors['gray-1'], borderColor: color, backgroundColor: color};
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
