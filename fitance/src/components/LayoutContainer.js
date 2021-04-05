import React from 'react';
import Lottie from 'react-lottie';
import Monkey from '../assets/animations/monkey.json';
import Particles from 'react-particles-js';

const LayoutContainer = ({children}) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
        <>
            <div className="w-100 h-screen bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                <div className="absolute w-100 top-0">
                        <Particles
                        width={width}
                        height={height}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 10,
                                    "random": true
                                },
                                "move": {
                                    "direction": "bottom",
                                    "out_mode": "out"
                                },
                                "line_linked": {
                                    "enable": false
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "remove"
                                    }
                                },
                                "modes": {
                                    "remove": {
                                        "particles_nb": 10
                                    }
                                }
                            }
                        }} />
                </div>
                <div className="container mx-auto relative">
                    {children}
                </div>
            </div>
        </>
    )
}

export default LayoutContainer;