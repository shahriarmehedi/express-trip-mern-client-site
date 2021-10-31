import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import FeatureSection from './FeatureSection';
import FeatureSection2 from './FeatureSection2';

const Home = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <Hero></Hero>
            <FeatureSection></FeatureSection>
            <Services></Services>
            <FeatureSection2></FeatureSection2>
            <ToastContainer
                position="top-center"
                autoClose={2000}
            />
        </motion.div>
    );
};

export default Home;