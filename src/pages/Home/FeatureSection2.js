import React from 'react';
import { NavLink } from 'react-router-dom';

const FeatureSection2 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/2PpdsVT/allinone.png" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block" />Grab it now!
                        </h1>
                        <p className="mb-8 leading-relaxed">ExpressTrip is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm</p>
                        <div>

                            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 transition duration-300 rounded text-lg"><NavLink to="/services">EXPLORE OUR OFFERINGS</NavLink></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection2;