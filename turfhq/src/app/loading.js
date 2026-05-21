import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-2">
            <Spinner color="current" />
        </div>
    );
};

export default loading;