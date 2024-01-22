import {useCallback, useState} from 'react';

export const useLoadingMutex = () => {
    const [pendingMutex, setPendingMutex] = useState<number | undefined>();
    const loadStart = useCallback(
        () => setPendingMutex((v = 0) => v + 1),
        []
    );
    const loadEnd = useCallback(
        () => setPendingMutex((v = 0) => (v - 1 < 0 ? 0 : v - 1)),
        []
    );
    return [Boolean(pendingMutex), loadStart, loadEnd] as const;
};
