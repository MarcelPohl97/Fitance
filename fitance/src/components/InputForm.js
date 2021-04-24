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

const InputForm = () => {
  const {inputUI, setInputUI, vital, setVital, simulationObjects, setSimulationObjects} = useContext(StateContext);
  const formValues = vital
  const formik = useFormik({
    initialValues: {
      age: formValues.age,
    },
    onSubmit: values => {
      setVital(values);
      setSimulationObjects(
        [...simulationObjects, 
        {
          id:(simulationObjects.length - 1) + 1,
          lat:0,
          lng:0,
          duration:5000,
          age:parseInt(values.age),
          height:180,
          name:'Sanja',
          gender: 'male',
          info: 'Lorem ipsum dolor sit amet',
          health_status:'Good',
          max_heart_rate:220,
          resting_heart_rate:60,
          target_heart_rate:0,
          walking_speed:15,
          walking_time:0,
          wish_walking_time:1,
          needed_walking_speed:0,
          injuries:true,
          result:'He did good'
      },
    ])
    },
  });
  return (
    <>
      <motion.div
        transition={{ type: "spring", stiffness: 100, }}
        initial={{ opacity: 0, y: -500}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: -500 }}
        className="fixed left-1/3 top-1/5 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-4 flex flex-col items-start mt-6 w-full max-w-[500px] h-auto">
        <motion.h3
            className="mb-10 text-center text-4xl text-[#008FFF] font-bold">
                <WavyText text={' Subject Form '} />
            </motion.h3>
            <form onSubmit={formik.handleSubmit}>
              <TextInput onChange={formik.handleChange} value={formik.values.age} label='Age' form_recognizer='age' placeholder={'Example: 26'} />
              <div className="flex flex-row items-center mt-5 space-x-5">
                <Button primary={true} title={'Submit Subject'} type={'submit'} />
                <Button primary={true} title={'Cancel'} type={'button'} onClick={() => {setInputUI(false);}} />
              </div>
            </form>
        </motion.div>
    </>
  );
};

export default InputForm;