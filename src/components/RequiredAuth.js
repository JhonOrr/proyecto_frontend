import React from 'react';
import { useAuth } from './auth';

export const RequiredAuth = () => {

    const auth = useAuth()
    return (
        <div>requiredAuth</div>
    )
}

