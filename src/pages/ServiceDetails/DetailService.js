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
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, []);








    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }} className="bg-gray-900 px-5 md:px-0 mx-auto">
            <h2 className=" py-10 text-center text-3xl font-bold text-yellow-400">{place}, {country} </h2>
            <img className="mx-auto rounded-box" src={imgURL} alt="" />
            <h2 className="text-gray-400 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2"> {description} </h2>
            <h2 className="text-gray-200 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl">Duration: {duration} Days </h2>
            <h2 className="text-gray-200 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl">For: {people} Person  </h2>
            <h2 className="text-gray-200 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xl">Ratings: <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star-half text-yellow-400"></i>{ratings} </h2>
            <h2 className="text-gray-200 pt-5 w-5/6 lg:w-2/5 mx-auto pb-20 text-xl">Package Price: <span className="text-yellow-400 text-2xl">$ {price}</span> </h2>
            <NavLink to={`/booking/${_id}`} activeStyle={{ fontWeight: "bold", color: "#34D399" }}><button className="px-8 py-3 mb-10 bg-yellow-400 custom-bg-font rounded hover:bg-white text-gray-800 transition duration-300 ">Book This Service</button></NavLink>
        </motion.div>
    );
};

export default DetailService;


