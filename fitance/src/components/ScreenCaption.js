import React from 'react';
import HighlightInfo from './HiglightInfo';

const ScreenCaption = ({caption1, caption2, highlight1, highlight2}) => {
    return (
        <>
            <h3 className="text-center text-4xl text-white font-bold">{caption1} <HighlightInfo title={highlight1}/> {caption2} <HighlightInfo title={highlight2}/></h3>
        </>
    )
}

export default ScreenCaption;