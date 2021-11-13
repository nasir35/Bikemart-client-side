import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-800 py-2 p-6">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-2 md:gap-y-0 gap-y-3 pb-4 border-b">
                <div id="logo-and-address">
                    <NavLink to="/home"><h2 className="text-coral text-2xl pb-2">BookMart</h2></NavLink>
                    <p className="text-indigo-100 font-medium">Address : </p>
                    <p className="text-green-100">&emsp;<i>#302H, 2B, Dhaka, Bangladesh</i></p>
                    <p className="text-green-100">&emsp;<i>#101H, 5B, Chittagong, Bangladesh</i></p>
                </div>
                <div id="useful-links" className="flex flex-col text-white">
                    <h2 className="font-medium text-white text-2xl">Useful Links</h2>
                    <NavLink to="/home" className="underline text-blue-200 px-4"><i className="fas fa-link pr-1"></i>Home</NavLink>
                    <NavLink to="/home" className="underline text-blue-200 px-4"><i className="fas fa-link pr-1"></i>Explore</NavLink>
                    <NavLink to="/home" className="underline text-blue-200 px-4"><i className="fas fa-link pr-1"></i>Dashboard</NavLink>
                </div>
                <div className="subscribe-our-newsletetr space-y-2">
                    <h2 className="md:text-2xl text-xl text-yellow font-medium">Subscribe our Newsletter</h2>
                    <input type="email" className="bg-gray-100 rounded px-3 py-1 block md:w-5/6 w-full" placeholder="abc@gmail.com" />
                    <button className="bg-green-custom rounded py-1 px-4 block text-white">Subscribe</button>
                </div>
            </div>
            <p className="text-center text-gray-300">&copy; All rights reserved. Nasir 2021</p>
        </div>
    );
};

export default Footer;