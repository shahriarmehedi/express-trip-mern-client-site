import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { _id, country, place, subtext, imgURL, ratings } = props.service

    return (
        <div className="transform hover:-translate-y-3 to-hover hover:shadow-xl bg-gray-800 text-center secondary-bg transition duration-300 rounded-box w-full mx-auto">
            <img className="mx-auto w-full rounded-t service-img" src={imgURL} alt="" />
            <h1 className="px-5 pt-5 text-2xl font-bold text-yellow-400">{place}, {country}</h1>
            <h2 className="px-5 pt-5 text-gray-400">{subtext}</h2>
            <h2 className="text-gray-200 pt-5 w-5/6 lg:w-2/5 mx-auto pb-2 text-xs">Ratings: <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star-half text-yellow-400"></i>{ratings} </h2>

            <NavLink
                to={`/services/${_id}`}
            ><button className="px-16 py-3 mt-5 mb-8 bg-yellow-400 custom-bg-font rounded-full hover:bg-white text-gray-800 transition duration-300">VIEW DETAILS</button></NavLink>
        </div>
    );
};

export default Service;