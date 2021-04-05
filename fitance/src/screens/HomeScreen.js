import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import Navigation from '../components/Navigation';
import Lottie from 'react-lottie';
import Girl from '../assets/animations/girlrunning.json';
import Men from '../assets/animations/menrunning.json';
import HighlightInfo from '../components/HiglightInfo';
import ScreenTitle from '../components/ScreenTitle';
import ScreenCaption from '../components/ScreenCaption';
import Button from '../components/Button';
import WavyText from '../components/WavyText';

import {
    Link
  } from "react-router-dom";

const HomeScreen = () => {
    const GirlOptions = {
        loop: true,
        autoplay: true, 
        animationData: Girl,
    }

    const MenOptions = {
        loop: true,
        autoplay: true, 
        animationData: Men,
    }

    return (
        <>
            <LayoutContainer>
                <Navigation />
                <div className="flex flex-col items-center">
                    <ScreenTitle title={'Fitance'} />
                    <ScreenCaption>
                        Calculate your <WavyText text={'Goals '} /> and become <WavyText text={'Fit '} />
                    </ScreenCaption>
                    <div>
                        <Lottie 
                        options={MenOptions}
                        height={450}
                        />
                    </div>
                    <div className="flex flex-row">
                        <Link to="/input">
                            <Button primary={true} title={'Get Started'} />
                        </Link>
                        <Button primary={false} title={'How it works'} />
                    </div>
                </div>
            </LayoutContainer>
        </>
    )
}

export default HomeScreen;

