import React from 'react';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    return (
        <div className="p-12">
            <h2 className="text-coral text-2xl text-center font-qsand font-bold py-8 pb-5">Congratulations..!</h2>
            <h2 className="text-center text-2xl text-stromboli font-medium font-roboto">Order Placed <span className="text-green-custom">Successfully!</span></h2>
            <div className="flex justify-center mt-12">
                <Link to="dashboard/myorders" className="px-8 py-1 mr-5 border-2 border-green-custom transition bg-green-custom hover:bg-white hover:border-green-custom hover:text-green-custom text-white rounded">My orders</Link>
                <Link to="/home" className="px-8 py-1 rounded text-green-custom hover:bg-green-custom transition border-green-custom border-2 hover:text-white">Home</Link>
            </div>
        </div>
    );
};

export default PlaceOrder;