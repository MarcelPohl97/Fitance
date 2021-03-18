import React from 'react';

const Distance = ({distance}) => {
    return (
        <div className="p-2 shadow-xl rounded-lg text-2xl mt-4 bg-white" style={{color:'#F06C88', border:'2px solid #F06C88'}}>
            Distance: {distance}
        </div>
    )
}

export default Distance;