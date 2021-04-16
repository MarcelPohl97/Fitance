import React from 'react';
import Lottie from 'react-lottie';
import Loading from '../assets/animations/loading.json';
import LayoutContainer from './LayoutContainer';
import Navigation from './Navigation';
import ScreenTitle from './ScreenTitle';
import ScreenCaption from './ScreenCaption';
import Button from './Button';
import WavyText from './WavyText';
import {
    Link
  } from "react-router-dom";

const Loader = () => {

    const LoaderOptions = {
        loop: true,
        autoplay: true, 
        animationData: Loading,
    }

    return (
        <>
            <LayoutContainer>
                <Navigation />
                    <div className="flex flex-col items-center">
                        <ScreenTitle title={'Calculating your Subjects'} />
                        <ScreenCaption>
                            Getting computed <WavyText text={'Values'} /> for their <WavyText text={'Goal'} />
                        </ScreenCaption>
                        <div className="p-6 bg-white rounded-lg shadow-lg w-auto mt-10">
                            <h3 className="text-center text-3xl text-[#008FFF]">Loading Data...</h3>
                            <Lottie 
                                options={LoaderOptions}
                                height={350}
                            />
                            <Link to="/input">
                                <Button primary={true} title={'Cancel'} styles={'float-right'} />
                            </Link>
                        </div>
                    </div>
            </LayoutContainer>
        </>
    )
}

export default Loader;