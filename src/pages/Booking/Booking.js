/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';



const Booking = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    let { bookingId } = useParams();

    const [booking, setBooking] = useState({});

    const onSubmit = data => {
        console.log('confirm booking clicked');

        console.log(data);
        axios.post('https://dreadful-spirit-92127.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booked successfully, Now visit My Bookings to view your bookings');
                    reset();
                }
            })

    };

    //  LOADING DATA
    useEffect(() => {
        fetch(`https://dreadful-spirit-92127.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);









    return (
        <div>
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="bg-yellow-50 text-white pb-24">
                <h1 className="pt-10 pb-20 text-center text-3xl font-bold text-gray-700">Confirm Your Booking</h1>
                <div className="text-gray-800 pb-20 bg-yellow-300 pt-10 rounded-box w-11/12 md:w-5/6 lg:w-2/5 mx-auto" >
                    <form className=" add-service-form w-5/6 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full py-10 bg-yellow-100 rounded-box mx-auto">
                            <h3 className="text-2xl font-bold">Selected Trip : {booking?.place}, {booking?.country} </h3>
                            <h4> Trip ID: {booking?._id} </h4> <br />
                            <h4 className="text-2xl"> Price: $ {booking?.price} </h4>
                            <h4 className="text-2xl"> Trip Duration: {booking?.duration} Days </h4>
                            <h4 className="text-2xl"> Person: {booking?.people} </h4>
                        </div> <br />


                        <input type="hidden" value="Pending" {...register("status")} />

                        <label className="label">
                            <span className="label-text text-gray-800">Your Full Name:</span>
                        </label>
                        <input value={user?.displayName} required {...register("fullname")} />



                        <label className="label">
                            <span className="label-text text-gray-800">Email:</span>
                        </label>
                        <input required type="email" value={user?.email} {...register("useremail")} />



                        <label className="label">
                            <span className="label-text text-gray-800">Phone:</span>
                        </label>
                        <input required type="tel" {...register("userphone", { required: true })} />



                        <label className="label">
                            <span className="label-text text-gray-800">Address:</span>
                        </label>
                        <textarea type="textarea" {...register("useraddress", { required: true })} />

                        <br />
                        <input className=" bg-gray-700 hover:bg-gray-800 transition duration-300 text-white mt-12 submit-btn" type="submit" value="CONFIRM BOOKING" />
                    </form>
                </div>

            </motion.div>
        </div>
    );
};

export default Booking;