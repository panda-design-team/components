import {forwardRef, ReactNode} from 'react';
import {Button as AntdButton, ButtonProps as AntdButtonProps, Tooltip} from 'antd';

export type ButtonType = 'primary' | 'default' | 'flat' | 'text' | 'link';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType;
    disabledReason?: ReactNode;
    tooltip?: ReactNode;
}

const Button = forwardRef<unknown, ButtonProps>(({tooltip, disabledReason, ...props}, ref) => {
    const element = (
        <AntdButton
            // @ts-expect-error
            ref={ref}
            {...props}
        />
    );
    if (props.disabled && disabledReason) {
        return (
            <Tooltip title={disabledReason}>
                <span>{element}</span>
            </Tooltip>
        );
    }
    if (tooltip) {
        return (
            <Tooltip title={tooltip}>
                <span>{element}</span>
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
