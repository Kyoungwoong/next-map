'use client'

import React, {useCallback} from 'react'
import {mutate} from 'swr';
import type {Store} from "../types/store";

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
    
    // 현재 선택된 Store
    const setCurrentStore = useCallback((store: Store) => {
        mutate(CURRENT_STORE_KEY, store);
    }, []);

    const clearCurrentStore = useCallback(() => {
        mutate(CURRENT_STORE_KEY, null);
    }, []);

  return {setCurrentStore, clearCurrentStore};
}

export default useCurrentStore
