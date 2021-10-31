import { motion } from 'framer-motion';
import React from 'react';
import "./AddService.css"
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })

    };

    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="bg-gray-900 text-white">
            <h1 className="pt-10 pb-20 text-center text-3xl font-bold text-green-400">ADD SERVICE HERE</h1>
            <div className="text-gray-800 pb-20 bg-yellow-300 pt-10 rounded-box w-11/12 md:w-5/6 lg:w-2/5 mx-auto" >
                <form className=" add-service-form w-5/6 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text text-gray-800">Destination Country:</span>
                    </label>
                    <input {...register("country", { required: true, maxLength: 20 })} />



                    <label className="label">
                        <span className="label-text text-gray-800">Place:</span>
                    </label>
                    <input required {...register("place", { required: true, maxLength: 20 })} />



                    <label className="label">
                        <span className="label-text text-gray-800">Tour Duration:</span>
                    </label>
                    <input required type="number" {...register("duration", { min: 1, max: 7 })} />



                    <label className="label">
                        <span className="label-text text-gray-800">Number of People:</span>
                    </label>
                    <input required type="number" {...register("people", { min: 1, max: 7 })} />



                    <label className="label">
                        <span className="label-text text-gray-800">Ratings</span>
                    </label>
                    <input type="number" step=".1" {...register("ratings", { required: true })} />



                    <label className="label">
                        <span className="label-text text-gray-800">Image URL:</span>
                    </label>
                    <input required {...register("imgURL", { required: true })} />


                    <label className="label">
                        <span className="label-text text-gray-800">Short Description:</span>
                    </label>
                    <textarea required {...register("subtext", { required: true })} />


                    <label className="label">
                        <span className="label-text text-gray-800">Description:</span>
                    </label>
                    <textarea required {...register("description", { required: true })} />


                    <label className="label">
                        <span className="label-text text-gray-800">Price:</span>
                    </label>
                    <input required type="number" {...register("price", { required: true })} />
                    <br />
                    <input className=" bg-yellow-400 mt-12 submit-btn" type="submit" value="ADD SERVICE" />
                </form>
            </div>

        </motion.div>
    );
};

export default AddService;

