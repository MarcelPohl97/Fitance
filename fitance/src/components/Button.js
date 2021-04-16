import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Button = ({type, primary, title, onClick, styles}) => {
    return (
        <> 
        {primary 
        ?
        <motion.button type={type} whileHover={{scale:1.1,}} whileTap={{scale:.95,}} className={`py-2 px-8 rounded-lg shadow-lg text-2xl bg-[#008FFF] focus:outline-none text-white mt-4 ${styles}`} onClick={onClick}>{title}</motion.button>
        :
        <motion.button whileHover={{scale:1.1,}} whileTap={{scale:.95,}} className={`py-2 px-8 rounded-lg text-[#333] bg-white shadow-lg focus:outline-none text-2xl mt-4 ml-4 ${styles}`} onClick={onClick}>{title}</motion.button>
        }
        </>
    )
}

export default Button;