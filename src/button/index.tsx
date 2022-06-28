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

const ForwardButton = React.forwardRef<unknown, ButtonProps>(({tooltip, disabledReason, ...props}, ref) => {
    // TODO 内部迁移后移除
    // @ts-expect-error
    const nextType = props?.type === 'link' || props?.type === 'icon' ? 'text' : props?.type;
    const nextIcon = props?.icon === undefined ? (nextType === 'text' ? <IconLogo /> : undefined) : props?.icon;
    // TODO 内部迁移后移除 text 类型 size 默认为 small
    const nextSize = props?.size === undefined ? (nextType === 'text' ? 'small' : undefined) : props?.size;
    const nextProps = {...props, type: nextType, icon: nextIcon, size: nextSize, ref};
    // @ts-expect-error
    const element = <AntdButton prefixCls="panda-button" {...nextProps} />;
    if (nextProps.disabled && disabledReason) {
        return (
            <Tooltip title={disabledReason}>
                {element}
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

export default ForwardButton;
