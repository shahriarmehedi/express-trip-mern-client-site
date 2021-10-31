import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div className="bg-yellow-100 text-white">
            <h1 className=" pt-10 text-center text-3xl font-bold text-green-400">Our Express Tour Packages</h1>
            <p className="text-gray-400 pt-5">Express tour packages includes these destination, for details please click each service</p>
            <div className="w-5/6 xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;