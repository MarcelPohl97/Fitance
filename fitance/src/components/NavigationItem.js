import React from 'react';
import {
    Link
  } from "react-router-dom";


const NavigationItem = ({routing, name, icon}) => {
    return (
        <>
        <Link to={routing}>
            <li className="flex flex-column items-center border-2 border-white p-2 rounded-md shadow-lg">
                <img src={icon} alt=""/>
                <a className="text-white">{name}</a>
            </li>
        </Link>
        </>
    )
}

export default NavigationItem;