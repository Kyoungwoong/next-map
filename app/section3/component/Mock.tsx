"use client"

import React, {useEffect} from 'react'
import useStores from "../../hooks/useStores";
import {Store} from "../../types/store";

interface StoresProps {
    stores: Store[];
}

const Mock = ({ stores }: StoresProps) => {
    
    const { initializeStores } = useStores();
    useEffect(() => {
        initializeStores(stores);
    }, [initializeStores, stores]);

    return null; // JSX에서 컴포넌트를 반환해야 합니다. 여기서는 null을 반환합니다.
}

export default Mock
