import React, { useEffect, useState } from 'react';
import Order from './Order';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://frozen-scrubland-17701.herokuapp.com/orders')
        .then(res => res.json())
        .then(allOrders => setOrders(allOrders))
    }, [orders]);
    return (
        <div className="p-3 lg:px-12 md:px-6">
            <div id="title-div" className="pb-5">
                <h2 className="md:text-2xl text-xl pb-4 font-qsand md:font-bold font-medium text-stromboli text-center"><span className="text-coral md:inline-block block">Hello Sir!</span> We have {orders.length} orders to manage</h2>
                <p className="text-gray-700 md:text-base text-sm text-center">All order will be appear here! You can see order information and take action on cancelling order or changing the order status.</p>
            </div>
            <div className="space-y-3">
                {
                    orders.map( (order) => <Order key={order._id} singleOrder={order}></Order>)
                }
            </div>
        </div>
    );
};

export default AllOrders;