import {forwardRef, ReactNode} from 'react';
import {Button as AntdButton, ButtonProps as AntdButtonProps, Tooltip} from 'antd';
import {cx} from '@emotion/css';

export type ButtonType = 'primary' | 'default' | 'flat' | 'text' | 'link';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType;
    disabledReason?: ReactNode;
    tooltip?: ReactNode;
}

const Button = forwardRef<unknown, ButtonProps>(({tooltip, disabledReason, className, type, ...props}, ref) => {
    const element = (
        <AntdButton
            // @ts-expect-error
            ref={ref}
            type={type === 'flat' ? 'default' : type}
            className={cx(`panda-btn-${type}`, className)}
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
