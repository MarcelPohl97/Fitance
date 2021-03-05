import React from 'react';

const ActionContainer = ({children}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-xl p-2">
                {children}
            </div>
        </>
    )
}

export default ActionContainer;