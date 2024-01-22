import {cloneElement, ComponentType, MouseEvent, ReactNode, useCallback, useEffect, useState} from 'react';
import {Input, InputProps, Space} from 'antd';
import {css, cx} from '@emotion/css';
import {Button} from '../button';
import {colors} from '../colors';
import {Text} from '../typography';
import {useLoadingMutex} from '../hooks/useLoadingMutex';

const marginLeft8 = css`
    margin-left: 8px;
`;

const displayContainerCss = css`
    display: inline-block;
    padding: 4px 11px;
    border-width: 1px;
    border-color: transparent;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        border-color: var(--panda-color-primary);
    }
`;

const displayDisabledCss = css`
    cursor: not-allowed;

    :hover {
        border-color: ${colors['gray-5']};
    }
`;

export interface EditProps<T = string> {
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
}: EditProps) {
    const props: InputProps = {
        autoFocus: true,
        className,
        value,
        onChange: e => onChange(e.target.value),
        onPressEnter: enableConfirm ? undefined : handleConfirm,
        onBlur: (enableConfirm || _debug) ? undefined : handleConfirm,
        placeholder,
    };
    return (
        <>
            {children
                // @ts-expect-error
                ? cloneElement(children, props)
                : <Input {...props} />
            }
            {enableConfirm && (
                <Space size={4} className={marginLeft8}>
                    {buttonGroup}
                </Space>
            )}
        </>
    );
}

export interface DisplayProps<T = string> {
    isEditing: boolean;
    value: T;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    confirmLoading: boolean;
    onEditStart: (e: MouseEvent) => void;
}

function DefaultDisplay({value, className, placeholder, disabled, onEditStart}: DisplayProps) {
    return (
        <div
            className={cx(displayContainerCss, disabled && displayDisabledCss, className)}
            onClick={disabled ? undefined : onEditStart}
        >
            {value || <Text type="tertiary">{placeholder}</Text>}
        </div>
    );
}

export interface RenderProps<T = string> {
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
    render?: (params: RenderProps<T>) => ReactNode;
    renderDisplay?: (params: DisplayProps<T>) => ReactNode;
    renderEdit?: (params: EditProps<T>) => ReactNode;
    Display?: ComponentType<DisplayProps<T>>;
    Edit?: ComponentType<EditProps<T>>;
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
    renderDisplay,
    renderEdit,
    Display = DefaultDisplay as unknown as ComponentType<DisplayProps<T>>,
    Edit = DefaultEdit as unknown as ComponentType<EditProps<T>>,
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

        const props: EditProps<T> = {
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

    const props: DisplayProps<T> = {
        isEditing: false,
        value,
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
