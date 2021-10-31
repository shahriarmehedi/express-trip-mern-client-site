import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className="bg-yellow-50">
            <section className="container mx-auto text-left px-10 py-40">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-10 leading-normal"> Explore the world  & <br />become your own tour guide
                        </h1>
                        <p className="">Make it work, make it right, make it fast.</p>
                        <button
                            className="px-8 py-3 mt-10 bg-yellow-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 "><NavLink to="/services">EXPLORE OUR SERVICES</NavLink></button>
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