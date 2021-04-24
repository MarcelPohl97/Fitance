import React from 'react';
import LayoutContainer from '../components/LayoutContainer';
import Navigation from '../components/Navigation';
import Lottie from 'react-lottie';
import Men from '../assets/animations/menrunning.json';
import ScreenTitle from '../components/ScreenTitle';
import ScreenCaption from '../components/ScreenCaption';
import Button from '../components/Button';
import WavyText from '../components/WavyText';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import {
    Link
  } from "react-router-dom";

const HomeScreen = () => {

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
                    <motion.div
                    transition={{ type: "spring", stiffness: 30, delay:0.4 }}
                    initial={{ opacity: 0, x:500 }}
                    animate={{ opacity: 1, x:0}}
                    exit={{ opacity: 0, x:500 }}>
                        <Lottie 
                        options={MenOptions}
                        height={450}
                        />
                    </motion.div>
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

