/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setMyBookings(data))

    }, [])



    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure to cancel this Booking?');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Service Deleted successfully')
                        const remaining = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(remaining);
                    }
                });
        }
    }



    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="bg-gray-900 text-white">
            <h1 className="pt-10 pb-20 text-center text-3xl font-bold text-green-400">Manage All Bookings</h1>
            <div className="w-5/6 xl:px-36 2xl:px-48 py-5 lg:py-28 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
                {
                    myBookings.map(booking => <div
                        key={booking._id}
                    >
                        <div className="transform bg-gray-800 to-hover hover:shadow-xl hover:bg-gray-700 text-center py-10 transition duration-300 rounded-box w-full mx-auto">
                            <h1 className="px-5 pt-5 text-2xl font-bold text-yellow-400">Name: {booking.fullname}</h1>
                            <h2 className="px-5 pt-5 text-gray-400">Order ID: {booking._id}</h2>
                            <h2 className="px-5 pt-5 text-gray-400">Email: {booking.useremail}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Phone: {booking.userphone}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Address: {booking.useraddress}</h2>
                            <h2 className="px-5 pt-5 text-gray-200 text-xl">Status: {booking.status === "Pending" ? <span className="py-1 px-3 text-gray-900 bg-purple-300 rounded">PENDING</span> : <span className="py-1 px-3 bg-green-300 text-gray-900 rounded">CONFIRMED</span>} </h2>
                            <br />
                            <button onClick={() => handleDeleteBooking(booking._id)} className="px-5 py-3 mt-10 mb-8 text-white bg-red-600 custom-bg-font rounded hover:bg-red-800 transition duration-300 ml-2">Cancel Booking</button>
                        </div>
                    </div>)
                }
            </div>
        </motion.div>
    );

};

export default MyBookings;