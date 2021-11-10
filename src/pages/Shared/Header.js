import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="grid grid-cols-12 lg:px-10 md:px-4 px-3 py-2 bg-gray-800 text-white font-qsand">
            <div className="col-span-2">
                <h2 className="text-coral text-2xl font-medium">BikeMart</h2>
                {/* <img src="https://i.ibb.co/3T53nLK/bicycle1.png" alt="" /> */}
            </div>
            <div className="col-span-6 grid-flow-col">
                <div className="flex justify-center items-center">
                    <NavLink to="home" className="md:text-lg text-base font-medium  mr-4">Home</NavLink>
                    <NavLink to="home" className="md:text-lg text-base font-medium mr-4">Explore</NavLink>
                    <NavLink to="home" className="md:text-lg text-base font-medium mr-4">News</NavLink>
                    <NavLink to="home" className="md:text-lg text-base font-medium ">About Us</NavLink>
                    {/* <NavLink to="home" className="md:text-lg text-base font-medium ">Dashboard</NavLink> */}
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex justify-end">
                    <NavLink to="/" className="md:text-lg text-base font-medium  mr-4">Login</NavLink>
                    <NavLink to="/" className="md:text-lg text-base font-medium ">Register</NavLink>
                    {/* <button>Log Out</button> */}
                </div>
            </div>
        </div>
    );
};

export default Header;