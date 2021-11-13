import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 bg-gray-200">
            <div>
                <img src="https://i.ibb.co/3T53nLK/bicycle1.png" alt="bicycle" />
            </div>
            <div className="space-y-6 flex justify-center items-center flex-col md:p-12 p-6">
                <h2 className="md:text-3xl sm:text-2xl text-xl text-center text-gray-900 font-medium">Buy Best Bicycles <br /> Online For Men <br />Women and Children</h2>
                <p className="text-center sm:text-base text-sm">Checkout our exclusive collections of city bikes, mountain bikes, road bikes, kids bikes and girls bikes!</p>
                <div className="flex justify-center text-white sm:text-lg text-base md:gap-5 gap-3">
                    <NavLink to="explore" className="bg-blue-600 hover:bg-gray-800 transition md:px-4 px-2 md:py-1 py-0.5 rounded">Explore Bikes</NavLink>
                    <NavLink to="dashboard" className="text-gray-800 border-2 border-gray-800 hover:bg-gray-800 transition hover:text-white md:px-4 px-2 md:py-1 py-0.5 rounded">Dashboard</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;