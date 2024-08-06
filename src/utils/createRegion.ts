/**
 * @file region-core 的 mini 版
 * @see https://github.com/regionjs/region-core
 */
import {useSyncExternalStore} from 'react';

type Listener = () => void;

type ResultFuncPure<V> = (snapshot: V) => V;

const getSetResult = <V>(resultOrFunc: V | ResultFuncPure<V>, snapshot: V) => {
    if (typeof resultOrFunc === 'function') {
        return (resultOrFunc as ResultFuncPure<V>)(snapshot);
    }
    return resultOrFunc;
};

const createRegion = <V>(initialValue: V) => {
    interface Ref {
        value?: V;
        listeners: Set<Listener>;
    }

    const ref: Ref = {
        value: undefined,
        listeners: new Set<Listener>(),
    };

    /* eslint-disable camelcase */
    const private_store_emit = (): void => {
        const listeners = ref.listeners;
        listeners.forEach(listener => listener());
    };

    const private_store_set = (value: V): void => {
        ref.value = value;
        private_store_emit();
    };

    const private_store_reset = (): void => {
        ref.value = undefined;
        private_store_emit();
    };

    const private_store_subscribe = (listener: Listener): () => void => {
        if (typeof listener === 'function') {
            ref.listeners?.add(listener);
        } else {
            console.warn(`listener should be function, but received ${listener}`);
        }

        return () => {
            ref.listeners.delete(listener);
        };
    };
    /* eslint-enable camelcase */

    const getValue = () => {
        const value = ref.value;
        if (value !== undefined) {
            return value;
        }
        return initialValue;
    };

    const set = (resultOrFunc: V | ResultFuncPure<V>): V => {
        const snapshot = getValue();
        const result = getSetResult(resultOrFunc, snapshot);
        private_store_set(result);
        return result;
    };

    const reset = (): void => {
        private_store_reset();
    };

    const useValue = () => useSyncExternalStore(private_store_subscribe, getValue);

    return {
        set,
        reset,
        getValue,
        useValue,
    };
};

export default createRegion;
