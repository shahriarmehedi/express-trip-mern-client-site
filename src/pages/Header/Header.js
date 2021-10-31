/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();

    // FOR MOBILE SIDEBAR //
    const [showmenu, setShowmenu] = useState(false);
    // MOBILE NAVIGATION //
    let menu
    if (showmenu) {
        menu =
            <div className="fixed bg-gray-800 top-0 left-0 w-4/5 h-full transition duration-500 shadow z-50">
                <h1 className="pt-10"><NavLink to="/home" activeStyle={{
                    fontWeight: "bold",
                    color: "#34D399"
                }}><button className="py-3">HOME</button></NavLink></h1>
                {
                    user?.displayName && <h1 className="pt-10"><NavLink to="/myBookings" activeStyle={{
                        fontWeight: "bold",
                        color: "#34D399"
                    }}><button className="py-3 ">MY BOOKINGS</button></NavLink></h1>
                }

                {
                    user?.displayName && <h1 className="pt-10"><NavLink to="/manageBookings" activeStyle={{
                        fontWeight: "bold",
                        color: "#34D399"
                    }}><button className="py-3 ">MANAGE BOOKINGS</button></NavLink></h1>
                }
                {
                    user?.displayName && <h1 className="pt-10"><NavLink to="/addService" activeStyle={{
                        fontWeight: "bold",
                        color: "#34D399"
                    }}><button className="py-3 ">ADD SERVICE</button></NavLink></h1>
                }
                <h1 className="pt-10">{user?.displayName ? <><h3 className=" user-name text-xl font-bold">{user?.displayName}</h3></> : <NavLink to="/login" activeStyle={{
                    fontWeight: "bold",
                    color: "#34D399"
                }}><button className="py-3 ">LOGIN</button></NavLink>}</h1>
                <h1>
                    {user?.displayName && <img className="user-photo mx-auto mt-4" src={user?.photoURL} alt="" />}
                </h1>
                <h1 className="pt-10">{user?.displayName ? <button className="px-6 py-3  bg-yellow-400 rounded text-gray-800 hover:bg-white transition duration-300" onClick={logOut}>Log Out</button> : <NavLink to="/signup"><button
                    className="px-6 py-3  bg-yellow-400 rounded text-gray-800 hover:bg-white transition duration-300">SIGNUP</button></NavLink>}</h1>
            </div>

    }



    return (
        <div>
            <nav className="bg-gray-900 text-white mx-auto overflow-x-hidden">
                <ul className="flex justify-between my-5 items-center">
                    <li className="px-10 lg:pl-20 py-3 text-2xl font-bold"><a href="/"><img src="https://i.ibb.co/HBhd9wh/expresstrip-logo.png" alt="" /></a></li>
                    <li className="md:hidden">{user?.displayName && <img className="user-photo" src={user?.photoURL} alt="" />}</li>
                    <li onClick={() => setShowmenu(!showmenu)} className="md:hidden text-2xl px-5"><i className="fas fa-bars"></i>
                        {menu}</li>
                    <div className="hidden md:flex">
                        <li className="mx-5 hover:text-green-400"><NavLink to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "#34D399"
                        }}><button className="py-3 hover:text-green-400 transition duration-300">HOME</button></NavLink>
                        </li>

                        {
                            user?.displayName && <li className="mx-5 hover:text-green-400 transition duration-300"><NavLink to="/myBookings" activeStyle={{
                                fontWeight: "bold",
                                color: "#34D399"
                            }}><button className="py-3 ">MY BOOKINGS</button></NavLink> </li>
                        }
                        {
                            user?.displayName && <li className="mx-5 hover:text-green-400 transition duration-300"><NavLink to="/addService" activeStyle={{
                                fontWeight: "bold",
                                color: "#34D399"
                            }}><button className="py-3 ">ADD SERVICE</button></NavLink> </li>
                        }

                        {
                            user?.displayName && <li className="mx-5 hover:text-green-400 transition duration-300"> <NavLink to="/manageBookings" activeStyle={{
                                fontWeight: "bold",
                                color: "#34D399"
                            }}><button className="py-3 ">MANAGE BOOKINGS</button></NavLink> </li>
                        }

                        <li className="mx-5 hover:text-green-400 transition duration-300">
                            {user?.displayName ? <><h3 className=" user-name text-xl font-bold">{user?.displayName}</h3></> : <NavLink to="/login" activeStyle={{
                                fontWeight: "bold",
                                color: "#34D399"
                            }}><button className="py-3 ">LOGIN</button></NavLink>} </li>
                        <li>
                            {user?.displayName && <img className="user-photo" src={user?.photoURL} alt="" />}
                        </li>

                        <li className="lg:mx-10 lg:px-8 hidden md:flex">
                            {user?.displayName ? <button className="px-6 py-3  bg-yellow-400 rounded text-gray-800 hover:bg-white transition duration-300" onClick={logOut}>Log Out</button> : <NavLink to="/signup"><button
                                className="px-6 py-3  bg-yellow-400 rounded text-gray-800 hover:bg-white transition duration-300">SIGNUP</button></NavLink>}
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Header;




