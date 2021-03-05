import React, { useState } from 'react';
import Branding from '../components/Branding';
import NavigationItems from '../components/NavigationItems';

const Navigation = () => {

    const navigation_Items = [
        {
            id:1,
            routing:'/support',
            name:'Support',
            icon:'Support',
        },
        {
            id:2,
            routing:'/how',
            name:'How it works',
            icon:'Guide',
        },
        {
            id:3,
            routing:'/about',
            name:'About',
            icon:'Info',
        }
    ]

    return (
        <>
            <div className="flex flex-row justify-between items-start pt-2">
                <Branding />
                <NavigationItems children={navigation_Items} />
            </div>
        </>
    )
}

export default Navigation;