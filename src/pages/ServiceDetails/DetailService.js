/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const DetailService = () => {

    let { serviceId } = useParams();

    const [servicesDetails, setServicesDetails] = useState({});

    const { _id, country, place, description, imgURL, duration, people, ratings, price } = servicesDetails;


    //  LOADING DATA
    useEffect(() => {
        fetch(`https://dreadful-spirit-92127.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, []);








    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }} className="bg-yellow-50 px-5 md:px-0">
            <div className=" rounded-box mx-auto">
                <h2 className=" py-10 text-center text-4xl font-bold text-gray-700">{place}, {country} </h2>
                <img className="mx-auto rounded-box" src={imgURL} alt="" />
                <h2 className="text-gray-500 pt-10 w-5/6 lg:w-2/5 mx-auto pb-2"> {description} </h2>
                <h2 className="text-gray-700 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl font-bold">Duration: {duration} Days </h2>
                <h2 className="text-gray-700 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl font-bold">For: {people} Person  </h2>
                <h2 className="text-gray-700 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl font-bold">Ratings: <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star-half text-yellow-500"></i>{ratings} </h2>
                <h2 className="text-gray-800 pt-5 w-5/6 lg:w-2/5 mx-auto pb-20 text-xl font-bold">Package Price: <span className="text-yellow-500 text-2xl font-bold">$ {price}</span> </h2>
                <NavLink to={`/booking/${_id}`} activeStyle={{ fontWeight: "bold", color: "#34D399" }}><button className="px-16 py-4 mb-10 bg-gray-700 rounded-full hover:bg-yellow-400 text-yellow-300 hover:text-gray-800 transition duration-300 ">Book This Service</button></NavLink>
            </div>
        </motion.div>
    );
};

export default DetailService;


