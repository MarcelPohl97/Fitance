import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = ({children}) => {
    return (
        <>
            <ul className="flex flex-row items-center space-x-4">    
                {children.map(child => (
                    <NavigationItem routing={child.routing} name={child.name} icon={children.icon}/>
                ))}
            </ul>
        </>
    )
}

export default NavigationItems;