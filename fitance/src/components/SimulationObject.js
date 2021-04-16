import React, {useState, useContext} from 'react';
import boy from '../assets/images/boy.svg';
import girl from '../assets/images/girl.svg';
import teenager from '../assets/images/teenage_boy.svg';
import teenie from '../assets/images/teenage_girl.svg';
import woman from '../assets/images/woman.svg';
import man from '../assets/images/man.svg';
import senior from '../assets/images/grandfather.svg';
import female_senior from '../assets/images/grandmother.svg';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { StateContext } from '../provider/StateProvider';

const SimulationObject = ({data, variant}) => {
    const { simulationObjects, setSimulationObjects} = useContext(StateContext);
    const [moreInfo, setMoreInfo] = useState(false);
    const toggleInfo = () => setMoreInfo(!moreInfo);

    const getImage = (age, gender) => {
        if(age <= 14 && gender === 'male') {return boy}
        if(age <= 18 && gender === 'male') {return teenager}
        if(age <= 50 && gender === 'male') {return man}
        if(age <= 80 && gender === 'male') {return senior}
        if(age <= 14 && gender === 'female') {return girl}
        if(age <= 18 && gender === 'female') {return teenie}
        if(age <= 50 && gender === 'female') {return woman}
        if(age <= 80 && gender === 'female') {return female_senior}
    }

    const calculateImageAge = getImage(data.age, data.gender);

    const deleteSimulationObject = (id) => {
        setSimulationObjects(simulationObjects.filter((object)=>(object.id !== id)))
    }

    return (
        <>
            <motion.div
            variants={variant}
            transition={{ type: "spring", stiffness: 100 }}
            initial={{ opacity: 0, x: -500}}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: -500 }}
            className="flex flex-row shadow-lg rounded-lg overflow-hidden w-auto h-auto">
                <div className="p-4 flex flex-col items-center bg-[#008FFF] w-[30%]">
                    <span className="bg-[#104d7c] rounded-full px-4 text-white py-1">Age {data.age}</span>
                    <div className="w-[100px] h-[100px] my-4 rounded-full border-1 border-[#104d7c]">
                        <img src={calculateImageAge} className="w-[100px] h-[100px]" alt="Simulation Object Image"/>
                    </div>
                    <span className="bg-[#104d7c] rounded-full px-4 text-white py-1">Height {data.height}</span>
                </div>
                <div className="w-[70%] relative">
                <motion.svg whileHover={{scale:1.1,}} whileTap={{scale:.95,}} onClick={() => {deleteSimulationObject(data.id)}} id="Outline" xmlns="http://www.w3.org/2000/svg" width={30} height={30} className="absolute top-2 right-3 cursor-pointer bg-[#008FFF] p-2 rounded-lg shadow-lg" fill={'#FFFFFF'} viewBox="0 0 24 24"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></motion.svg>
                    <div className="p-4 flex flex-col items-center justify-between bg-white h-full">
                        <h3 className="font-bold text-3xl text-[#008FFF] wavy-text">{data.name}</h3>
                        <p className="text-left max-p">{data.info}</p>
                        <button onClick={toggleInfo}>More Info</button>
                    </div>
                    <AnimatePresence>{moreInfo && 
                        <motion.div 
                        initial={{ opacity: 0, width:0 }}
                        animate={{ opacity: 1, width:'100%'}}
                        exit={{ opacity: 0, width:0 }}
                        className="absolute top-0 left-0 h-full bg-[#008FFF] border-l-2 p-4">
                            <h3 className="font-bold text-3xl text-white wavy-text">Test</h3>
                            <button onClick={toggleInfo}>X</button>
                        </motion.div>
                    }
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    )
}

export default SimulationObject;