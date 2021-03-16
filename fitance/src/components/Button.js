import React from 'react';

const Button = ({primary, title, onClick}) => {
    return (
        <> 
        {primary 
        ?
        <button className="py-2 px-8 rounded-lg border-2 border-white shadow-xl text-2xl text-white mt-4" style={{background:'#F06C88'}} onClick={onClick}>{title}</button>
        :
        <button className="py-2 px-8 rounded-lg border-2 border-white shadow-xl text-2xl text-white mt-4 ml-4" onClick={onClick}>{title}</button>
        }
        </>
    )
}

export default Button;