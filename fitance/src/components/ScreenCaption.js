import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const ScreenCaption = ({children, styles}) => {
    return (
        <>
            <motion.h3
            transition={{ type: "spring", stiffness: 100, delay:.2 }}
            initial={{ opacity: 0, y:-200 }}
            animate={{ opacity: 1, y:0}}
            exit={{ opacity: 0, y:-100 }}
            className={`text-center text-4xl text-white font-bold ${styles}`}>{children}</motion.h3>
        </>
    )
}

export default ScreenCaption;