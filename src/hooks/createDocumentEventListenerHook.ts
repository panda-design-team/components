import {RefObject, useLayoutEffect, useRef} from 'react';

export const createDocumentEventListenerHook = <K extends keyof DocumentEventMap>(
    type: K,
    options?: boolean | AddEventListenerOptions
) => {
    type Listener = (e: DocumentEventMap[K]) => void;
    const listeners = new Set<RefObject<Listener>>();
    const handleDocumentEvent = (e: DocumentEventMap[K]) => {
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
    document.addEventListener(type, handleDocumentEvent, options);
    return useEventListener;
};
