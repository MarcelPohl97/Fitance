import React from 'react';
import Running from '../assets/images/running.svg';
import {
    Link
  } from "react-router-dom";
  import Lottie from 'react-lottie';
import Monkey from '../assets/animations/monkey.json';

const Branding = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Monkey,
    }
    return (
        <>
        <div className="flex flex-row">
            <Link to="/">
                <div className="flex flex-row items-center border-2 border-white p-2 rounded-md shadow-lg -ml-1">
                    <div className="p-2 rounded-md bg-white">
                        <img style={{height:'3rem',}} src={Running} alt="Fitance Branding"/>
                    </div>
                    <h2 className="ml-2 text-white font-bold text-2xl">Fitance</h2>
                </div>
            </Link>
        </div>
        </>
    )
}

export default Branding;