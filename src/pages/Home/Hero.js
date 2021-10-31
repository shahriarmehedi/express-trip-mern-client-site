import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className="bg-yellow-50">
            <section className="container mx-auto text-left px-10 py-40">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-10 leading-normal"> <span className="text-yellow-400">Explore</span> the world  & <br />become your own tour guide
                        </h1>
                        <p className="">Explore the country’s first and leading online travel aggregator.</p>
                        <button
                            className="px-8 py-3 mt-10 bg-gray-700 rounded hover:bg-yellow-400 text-yellow-300 hover:text-white transition duration-300 "><NavLink to="/services">EXPLORE PACKAGES</NavLink></button>
                    </div>
                    <div>
                        <img className="py-10 lg:py-0" src="https://i.ibb.co/9W8RTQJ/top-banner.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;