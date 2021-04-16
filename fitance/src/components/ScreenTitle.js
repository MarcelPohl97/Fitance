import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const ScreenTitle = ({title}) => {
    return (
        <>
            <motion.h1
            transition={{ type: "spring", stiffness: 100 }}
            initial={{ opacity: 0, y:-200 }}
            animate={{ opacity: 1, y:0}}
            exit={{ opacity: 0, y:-100 }}
            className="text-left text-6xl text-white font-bold mb-2">{title}</motion.h1>
        </>
    )
}

export default ScreenTitle;