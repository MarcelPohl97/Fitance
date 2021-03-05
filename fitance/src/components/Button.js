import React from 'react';

const Button = ({primary, title}) => {
    return (
        <> 
        {primary 
        ?
        <button className="p-2 rounded-lg border-2 border-white shadow-xl text-2xl text-white mt-4" style={{background:'#F06C88'}}>{title}</button>
        :
        <button className="p-2 rounded-lg border-2 border-white shadow-xl text-2xl text-white mt-4 ml-4 ">{title}</button>
        }
        </>
    )
}

export default Button;