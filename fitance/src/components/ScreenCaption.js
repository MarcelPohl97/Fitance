import React from 'react';

const ScreenCaption = ({children}) => {
    return (
        <>
            <h3 className="text-center text-4xl text-white font-bold">{children}</h3>
        </>
    )
}

export default ScreenCaption;