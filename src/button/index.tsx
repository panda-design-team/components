import {forwardRef, ReactNode} from 'react';
import {Button as AntdButton, ButtonProps as AntdButtonProps, Tooltip} from 'antd';
import {IconLogo} from '../icons';

export type ButtonType = 'primary' | 'default' | 'flat' | 'text' | 'icon';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType;
    disabledReason?: ReactNode;
    tooltip?: ReactNode;
}

const Button = forwardRef<unknown, ButtonProps>(({tooltip, disabledReason, ...props}, ref) => {
    const isInlineTextType = props?.type === 'icon' || props?.type === 'text';
    const nextIcon = props?.icon === undefined ? (isInlineTextType ? <IconLogo /> : undefined) : props?.icon;
    const nextType = isInlineTextType ? 'inline-text' : props?.type;
    const nextProps = {
        ...props,
        type: nextType,
        icon: nextIcon,
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
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
Button.__ANT_BUTTON = true;

export default Button;
