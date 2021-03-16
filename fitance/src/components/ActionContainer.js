import React from 'react';

const ActionContainer = ({children}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-start mt-6 w-full h-full">
                {children}
            </div>
        </>
    )
}

export default ActionContainer;