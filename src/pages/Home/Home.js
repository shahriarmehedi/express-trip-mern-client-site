import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <Hero></Hero>
            <Services></Services>
            <ToastContainer
                position="top-center"
                autoClose={2000}
            />
        </motion.div>
    );
};

export default Home;