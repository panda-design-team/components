import {RefObject, useLayoutEffect, useRef} from 'react';

export const createWindowEventListenerHook = <K extends keyof WindowEventMap>(
    type: K,
    options?: boolean | AddEventListenerOptions
) => {
    type Listener = (e: WindowEventMap[K]) => void;
    const listeners = new Set<RefObject<Listener>>();
    const handleWindowEvent = (e: WindowEventMap[K]) => {
        listeners.forEach(listener => {
            listener.current?.(e);
        });
    };
    const useEventListener = (listener: Listener) => {
        const listenerRef = useRef(listener);
        listenerRef.current = listener;

        useLayoutEffect(
            () => {
                listeners.add(listenerRef);
                return () => {
                    listeners.delete(listenerRef);
                };
            },
            []
        );
    };
    window.addEventListener(type, handleWindowEvent, options);
    return useEventListener;
};
