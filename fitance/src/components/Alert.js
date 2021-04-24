import React, { useEffect, useContext } from 'react';
import { useFormik } from 'formik';
import Button from '../components/Button';
import { StateContext } from '../provider/StateProvider';
import {
  Link
} from "react-router-dom";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import WavyText from '../components/WavyText';
import TextInput from './TextInput';
import Lottie from 'react-lottie';
import Error from '../assets/animations/error.json';

const Alert = () => {
    const ErrorOptions = {
        loop: true,
        autoplay: true, 
        animationData: Error,
    }

    const {alertUI, setAlertUI,} = useContext(StateContext);
  
  return (
    <>
        <motion.div
            transition={{ type: "spring", stiffness: 100, }}
            initial={{ opacity: 0, y: -500}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -500 }}
            className="fixed left-1/3 top-1/5 z-50 -transform-x-1/2 -transform-y-1/2 bg-white rounded-lg shadow-xl p-4 flex flex-col items-center mt-6 w-full max-w-[500px] h-auto">
            <motion.h3 className={`mb-5 text-center text-4xl ${alertUI.color} ${alertUI.status} font-bold`}>
                {alertUI.title }
            </motion.h3>
            <motion.p className="text-[#333] font-semibold text-lg text-center">{alertUI.caption}</motion.p>
            <Lottie
            options={ErrorOptions}
            height={300}
            />
            <Button primary={true} title={'Back'} type={'button'} styles={'self-end'} onClick={() => {setAlertUI({...alertUI, show:false});}} />
        </motion.div>
    </>
  );
};



export default Alert;