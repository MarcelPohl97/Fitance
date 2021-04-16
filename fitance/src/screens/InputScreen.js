import React, {useState, useEffect, useContext} from 'react';
import LayoutContainer from '../components/LayoutContainer';
import Navigation from '../components/Navigation';
import HighlightInfo from '../components/HiglightInfo';
import ScreenTitle from '../components/ScreenTitle';
import ScreenCaption from '../components/ScreenCaption';
import ActionContainer from '../components/ActionContainer';
import Button from '../components/Button';
import {
    Link
  } from "react-router-dom";
import Map from '../components/Map';
import InputForm from '../components/InputForm';
import Distance from '../components/Distance';
import WavyText from '../components/WavyText';
import { StateContext } from '../provider/StateProvider';
import SimulationObject from '../components/SimulationObject';
import Lottie from 'react-lottie';
import Empty from '../assets/animations/empty.json';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Girl from '../assets/animations/girlrunning.json';
import Alert from '../components/Alert';
import { useHistory } from "react-router-dom";


const InputScreen = () => {
    const history = useHistory();
    const GirlOptions = {
        loop: true,
        autoplay: true, 
        animationData: Girl,
    }

    const container = {
        hidden: { opacity: 0, x:-500},
        show: {
          opacity: 1,
          x:0,
          transition: {
            staggerChildren: .5,
            delayChildren: 0.8
          }
        }
      }
      
      const variant = {
        hidden: { opacity: 0, x:-500, },
        show: { opacity: 1, x: 0 }
      }
    const EmptyOptions = {
        loop: true,
        autoplay: true, 
        animationData: Empty,
    }
    const {inputUI, setInputUI, startCoords, goalCoords, yourCoords, setYourCoords, setInitObjects, simulationObjects, alertUI, setAlertUI} = useContext(StateContext);

    const checkSimulatedObjects = () => {
        {simulationObjects.length > 0 ? 
            history.push('/map') : 
            setAlertUI(
                {
                    show:true,
                    title:'Error', 
                    caption:'You can´t proceed to the map, you need to have atleast 1 Subject.', 
                    color:'text-red-600',
                    status:'wavy-error-text',
                }
            )
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            setYourCoords(coords);
          });
    })

    return (
        <>
            <LayoutContainer>
                <Navigation />
                <AnimatePresence>
                    { inputUI && <InputForm /> }
                    { alertUI.show && <Alert />}
                </AnimatePresence>
                <div className="flex flex-col items-center">
                    <ScreenTitle title={'Your Fitness Level'} />
                    <ScreenCaption>
                        Input your <WavyText text={'Subjects'} /> and calculate your <WavyText text={'Goal'} />
                    </ScreenCaption>
                    <motion.div
                    transition={{ type: "spring", stiffness: 30, delay:0.4 }}
                    initial={{ opacity: 0, x:-500 }}
                    animate={{ opacity: 1, x:0}}
                    exit={{ opacity: 0, x:-500 }}>
                        <Lottie 
                        options={GirlOptions}
                        height={550}
                        />
                    </motion.div>
                    <div className="flex flex-row items-center space-x-4">
                        <Link to="/">
                            <Button primary={true} title={'Back to Landing'} />
                        </Link>
                        <motion.svg  whileHover={{scale:1.1,}} whileTap={{scale:.95,}} onClick={() => {setInputUI(true);}} id="Outline" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer bg-[#008FFF] p-2 mt-3 rounded-lg shadow-lg" fill={'#FFFFFF'} width={45} height={45} viewBox="0 0 24 24"><path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/></motion.svg>
                        <Button primary={true} title={'Continue to Map'} onClick={checkSimulatedObjects} />
                    </div>
                </div>
                <div className="mt-10">
                    <motion.h3
                    transition={{ type: "spring", stiffness: 100, delay:.5 }}
                    initial={{ opacity: 0, x:-500 }}
                    animate={{ opacity: 1, x:0}}
                    exit={{ opacity: 0, x:-500 }}
                    className="mb-10 text-center text-4xl text-white font-bold">
                        <WavyText text={' Simulation Subjects '} />
                    </motion.h3>
                    <AnimatePresence>
                        {simulationObjects.length > 0 ? <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid-layout pb-10">
                                {simulationObjects.map(object => (
                                    <SimulationObject data={object} variant={variant} />
                                ))}
                            </motion.div> :
                            <motion.div
                            transition={{ type: "spring", stiffness: 100, delay:0.8 }}
                            initial={{ opacity: 0, x: -500}}
                            animate={{ opacity: 1, x: 0}}
                            exit={{ opacity: 0, x: -500 }}
                            className="bg-white rounded-lg shadow-lg p-6 display flex flex-col items-center justify-center max-w-[500px] mx-auto">
                                <h4 className="text-[#008FFF] text-3xl text-center">We are currently out of Subjects go add some!</h4>
                                <Lottie 
                                    options={EmptyOptions}
                                    height={400}
                                />
                            </motion.div>   
                        }
                    </AnimatePresence>
                </div>
            </LayoutContainer>
        </>
    )
}

export default InputScreen;