import {useRef, useState, useCallback, useLayoutEffect, ReactNode, useMemo} from 'react';
import {cx, css} from '@emotion/css';
import {theme} from 'antd';
import {IconClose} from '../icons';
import {getAntPrefixCls} from '../regions/antPrefixCls';

type OnClose = () => void;

type Type = 'info' | 'success' | 'error' | 'warning' | 'loading';

const findContentContainer = (element: HTMLElement | null) => {
    const antPrefixCls = getAntPrefixCls();
    let current: HTMLElement | null = element;
    while (current) {
        if (current.classList.contains(`${antPrefixCls}-message-notice-content`)) {
            return current;
        }
        current = current.parentElement;
    }
};

interface Props {
    type: Type;
    handlerRef: {value: () => void};
    duration?: number;
    content?: ReactNode;
    onClose?: OnClose;
    showCloseIcon?: boolean;
}

export const MessageContent = ({type, duration, content, handlerRef, onClose, showCloseIcon = true}: Props) => {
    const {token} = theme.useToken();
    const ref = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);
    const setHoveringTrue = useCallback(
        () => setHovering(true),
        []
    );
    const setHoveringFalse = useCallback(
        () => setHovering(false),
        []
    );

    const handleClose = () => {
        handlerRef.value();
        onClose?.();
    };

    const backgroundColor = useMemo(
        () => {
            switch (type) {
                case 'info':
                case 'loading':
                    return token.colorInfo;
                case 'success':
                    return token.colorSuccess;
                case 'error':
                    return token.colorError;
                case 'warning':
                    return token.colorWarning;
                default:
                    return token.colorInfo;
            }
        },
        [type, token.colorError, token.colorInfo, token.colorSuccess, token.colorWarning]
    );

    const progressBarCss = useMemo(
        () => {
            if (hovering) {
                const hoveringCss = css`
                    transform: scaleX(${duration === 0 ? 0 : 1});
                `;
                return cx('panda-message-progress-bar', hoveringCss);
            }
            const animationCss = css`
                animation: scaleX ${duration ?? 3}s linear forwards;
        
                @keyframes scaleX {
                    0% {
                        transform: scaleX(1);
                    }
        
                    100% {
                        transform: scaleX(0);
                    }
                }
            `;
            return cx('panda-message-progress-bar', animationCss);
        },
        [duration, hovering]
    );

    useLayoutEffect(
        () => {
            const maybeContainer = findContentContainer(ref.current);
            if (maybeContainer) {
                maybeContainer.addEventListener('mouseenter', setHoveringTrue);
                maybeContainer.addEventListener('mouseleave', setHoveringFalse);

                return () => {
                    maybeContainer.removeEventListener('mouseenter', setHoveringTrue);
                    maybeContainer.removeEventListener('mouseleave', setHoveringFalse);
                };
            }
        },
        [setHoveringFalse, setHoveringTrue]
    );
    return (
        <>
            <div ref={ref} className={progressBarCss} style={{backgroundColor}} />
            {content}
            {showCloseIcon && <IconClose className="panda-message-close" onClick={handleClose} />}
        </>
    );
};
