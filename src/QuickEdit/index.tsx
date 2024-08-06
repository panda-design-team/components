import {Children, cloneElement, isValidElement, ComponentType, MouseEvent, ReactNode, useCallback, useEffect, useState} from 'react';
import {Input, InputProps, Space} from 'antd';
import {css, cx} from '@emotion/css';
import {Button} from '../button';
import {colors, token} from '../theme/base';
import {Text} from '../typography';
import {useLoadingMutex} from '../hooks/useLoadingMutex';
import {IconEdit} from '../icons';

const marginLeft8 = css`
    margin-left: 8px;
`;

export interface QuickEditEditProps<T = string> {
    isEditing: boolean;
    value: T;
    onChange: (value: T) => void;
    className?: string;
    placeholder?: string;
    buttonGroup: ReactNode;
    confirmLoading: boolean;
    enableConfirm?: boolean;
    handleConfirm: () => void;
    children?: ReactNode;
    _debug?: boolean;
}

function DefaultEdit({
    value,
    onChange,
    className,
    placeholder,
    buttonGroup,
    handleConfirm,
    enableConfirm,
    children,
    _debug,
}: QuickEditEditProps) {
    const props: InputProps = {
        autoFocus: true,
        className,
        value,
        onChange: (e: any) => onChange(e?.target ? e.target.value : e),
        onPressEnter: enableConfirm ? undefined : handleConfirm,
        onBlur: (enableConfirm || _debug) ? undefined : handleConfirm,
        placeholder,
    };

    const clonedChildren = children
        ? Children.map(children as any, child => {
            if (isValidElement(child)) {
                const childProps: any = child?.props;
                return cloneElement<any>(child, {
                    ...props,
                    ...childProps,
                });
            }
            return child;
        })
        : <Input {...props} />;

    return (
        <>
            {clonedChildren}
            {enableConfirm && (
                <Space size={4} className={marginLeft8}>
                    {buttonGroup}
                </Space>
            )}
        </>
    );
}

const displayContainerCss = css`
    display: inline-block;
    padding: 4px 11px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        border-color: ${token.colorPrimary};
    }
`;

const displayDisabledCss = css`
    cursor: not-allowed;

    :hover {
        border-color: ${colors['gray-5']};
    }
`;

const displayIconCss = css`
    margin-left: 8px;
`;

const displayIconDisabledCss = css`
    color: ${colors['gray-6']};
`;

export interface QuickEditDisplayProps<T = string> {
    isEditing: boolean;
    value: T;
    renderValue?: (value: T) => ReactNode;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    confirmLoading: boolean;
    onEditStart: (e: MouseEvent) => void;
}

function DefaultDisplay({value, renderValue, className, placeholder, disabled, onEditStart}: QuickEditDisplayProps) {
    return (
        <div
            className={cx(displayContainerCss, disabled && displayDisabledCss, className)}
            onClick={disabled ? undefined : onEditStart}
        >
            {(renderValue ? renderValue(value) : value) || <Text type="tertiary">{placeholder}</Text>}
            <IconEdit className={cx(displayIconCss, disabled && displayIconDisabledCss)} />
        </div>
    );
}

export interface QuickEditRenderProps<T = string> {
    isEditing: boolean;
    value: T;
    onChange?: (value: T) => void;
    className?: string;
    placeholder?: string;
    buttonGroup?: ReactNode;
    confirmLoading: boolean;
    enableConfirm?: boolean;
    handleConfirm?: () => void;
    disabled?: boolean;
    onEditStart?: (e: MouseEvent) => void;
}

export interface QuickEditProps<T = string> {
    value: T;
    onConfirm: (value: T) => void | Promise<void>;
    onEditStart?: (e: MouseEvent) => void;
    onCancel?: () => void;
    className?: string;
    displayClassName?: string;
    editClassName?: string;
    placeholder?: string;
    disabled?: boolean;
    validate?: (value: T) => string | boolean;
    enableConfirm?: boolean;
    enableOptimistic?: boolean;
    render?: (params: QuickEditRenderProps<T>) => ReactNode;
    renderValue?: (value: T) => ReactNode;
    renderDisplay?: (params: QuickEditDisplayProps<T>) => ReactNode;
    renderEdit?: (params: QuickEditEditProps<T>) => ReactNode;
    Display?: ComponentType<QuickEditDisplayProps<T>>;
    Edit?: ComponentType<QuickEditEditProps<T>>;
    children?: ReactNode;
    _debug?: boolean;
}

export function QuickEdit<T = string>({
    value,
    onConfirm,
    onEditStart,
    onCancel,
    className,
    displayClassName,
    editClassName,
    placeholder,
    disabled,
    validate,
    enableConfirm,
    enableOptimistic,
    render,
    renderValue,
    renderDisplay,
    renderEdit,
    Display = DefaultDisplay as unknown as ComponentType<QuickEditDisplayProps<T>>,
    Edit = DefaultEdit as unknown as ComponentType<QuickEditEditProps<T>>,
    children,
    _debug,
}: QuickEditProps<T>) {
    const [innerValue, setInnerValue] = useState<T>(value);
    const [isEditing, startEditing, endEditing] = useLoadingMutex();
    const [confirmLoading, startConfirmLoading, endConfirmLoading] = useLoadingMutex();

    useEffect(
        () => {
            setInnerValue(value);
        },
        [value]
    );

    const handleEditStart = useCallback(
        (e: MouseEvent) => {
            setInnerValue(value);
            startEditing();
            onEditStart?.(e);
        },
        [onEditStart, startEditing, value]
    );

    const handleConfirm = useCallback(
        async () => {
            if (confirmLoading) {
                return;
            }
            startConfirmLoading();
            if (enableOptimistic) {
                endEditing();
            }
            try {
                await onConfirm(innerValue);
                if (!enableOptimistic) {
                    endEditing();
                }
            }
            catch (e) {
                setInnerValue(value);
            }
            finally {
                endConfirmLoading();
            }
        },
        [
            confirmLoading,
            startConfirmLoading,
            enableOptimistic,
            endEditing,
            onConfirm,
            innerValue,
            value,
            endConfirmLoading,
        ]
    );

    const handleCancel = useCallback(
        () => {
            setInnerValue(value);
            endEditing();
            onCancel?.();
        },
        [endEditing, onCancel, value]
    );

    const handleInnerChange = useCallback(
        (callbackValue: T) => {
            setInnerValue(callbackValue);
        },
        []
    );

    if (isEditing) {
        const valueChanged = value !== innerValue;
        let validateError: string | boolean = '';
        if (validate && valueChanged) {
            validateError = validate(innerValue);
        }
        const buttonGroup = (
            <>
                <Button
                    type="text"
                    loading={confirmLoading}
                    onClick={handleConfirm}
                    disabled={!valueChanged || Boolean(validateError)}
                    disabledReason={typeof validateError === 'string' ? validateError : undefined}
                >
                    确定
                </Button>
                <Button
                    type="text"
                    onClick={handleCancel}
                >
                    取消
                </Button>
            </>
        );

        const props: QuickEditEditProps<T> = {
            isEditing: true,
            value: innerValue,
            onChange: handleInnerChange,
            className: cx(className, editClassName),
            placeholder,
            buttonGroup,
            confirmLoading,
            enableConfirm,
            handleConfirm,
            children,
            _debug,
        };

        if (render) {
            return <>{render(props)}</>;
        }

        if (renderEdit) {
            return <>{renderEdit(props)}</>;
        }

        return <Edit {...props} />;
    }

    const props: QuickEditDisplayProps<T> = {
        isEditing: false,
        value,
        renderValue,
        disabled,
        placeholder,
        className: cx(className, displayClassName),
        confirmLoading,
        onEditStart: handleEditStart,
    };

    if (render) {
        return <>{render(props)}</>;
    }

    if (renderDisplay) {
        return <>{renderDisplay(props)}</>;
    }

    return <Display {...props} />;
}
