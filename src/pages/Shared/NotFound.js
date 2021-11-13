import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    const back = () => {
        return history.goBack();
    }
    return (
        <div className="bg-gray-800 md:p-24 sm:p-14 p-6 flex-col flex justify-center items-center min-h-full h-screen">
            <h1 className="text-center text-white p-3 md:text-7xl sm:text-5xl text-4xl tracking-widest font-extrabold font-serif">404</h1>
            <h3 className="text-yellow md:text-xl sm:text-base text-sm md:pt-8 sm:pt-6 pt-4 text-center">OOPS! Page not found! It doesn't exist or the owner removed the page.</h3>
            <div className="flex sm:justify-center justify-around pt-12">
                <button onClick={back} className="mr-2 px-6 rounded transition bg-coral text-white hover:bg-yellow-600">Go Back</button>
                <NavLink to="/home" ><button className="px-6 rounded py-2 bg-green-custom text-white hover:bg-green-400 transition">Home</button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;