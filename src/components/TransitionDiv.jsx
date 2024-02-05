import React from 'react'
import { motion } from 'framer-motion'

const TransitionDiv = ({ children }) => {
    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}>
                    {
                        children
                    }
            </motion.div>
        </>
    )
}

export default TransitionDiv
