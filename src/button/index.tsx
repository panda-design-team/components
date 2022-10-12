import * as React from 'react';
import {Button as AntdButton, ButtonProps as AntdButtonProps, Tooltip} from 'antd';
import {IconLogo} from '../icons';
import './index.global.less';

export type ButtonType = 'primary' | 'default' | 'flat' | 'text' | 'icon';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType;
    disabledReason?: React.ReactNode;
    tooltip?: React.ReactNode;
}

const Button = React.forwardRef<unknown, ButtonProps>(({tooltip, disabledReason, ...props}, ref) => {
    const nextType = props?.type === 'icon' ? 'text' : props?.type ?? 'default';
    const nextIcon = props?.icon === undefined ? (nextType === 'text' ? <IconLogo /> : undefined) : props?.icon;
    const nextClassName = [
        'panda-button',
        `panda-button-${nextType}`,
        props?.size && `panda-button-${props?.size}`,
        props?.className,
    ].filter(Boolean).join(' ');
    const nextProps = {
        ...props,
        prefixCls: '_',
        type: 'custom',
        icon: nextIcon,
        size: undefined,
        className: nextClassName,
        ref,
    };
    // @ts-expect-error
    const element = <AntdButton {...nextProps} />;
    if (nextProps.disabled && disabledReason) {
        return (
            <Tooltip title={disabledReason}>
                <span>{element}</span>
            </Tooltip>
        );
    }
    if (tooltip) {
        return (
            <Tooltip title={tooltip}>
                {element}
            </Tooltip>
        );
    }
    return element;
});

Button.displayName = 'PandaButton';

export default Button;
