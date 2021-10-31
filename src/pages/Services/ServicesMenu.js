import React from 'react';
import Services from '../Home/Services';
import { motion } from 'framer-motion';

const ServicesMenu = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}>
            <Services></Services>
        </motion.div>
    );
};

export default ServicesMenu;