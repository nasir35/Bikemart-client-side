import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      "https://bikemart-server-side-bem11l6mg-nasir35s-projects.vercel.app/orders"
    )
      .then((res) => res.json())
      .then((allOrders) => {
        const myOrders = allOrders.filter((ord) => ord.email == user.email);
        setOrders(myOrders);
      });
  }, [orders]);

  return (
    <div className="p-3 lg:px-12 md:px-6">
      <div id="title-div" className="pb-5">
        <h2 className="md:text-2xl text-xl pb-4 font-qsand md:font-bold font-medium text-stromboli text-center">
          <span className="text-coral md:inline-block block">
            Welcome Chief!
          </span>{" "}
          You have made {orders.length} orders
        </h2>
        <p className="text-gray-700 md:text-base text-sm text-center">
          Your all order will be appear here! You can see your order information
          and take action on cancelling order.
        </p>
      </div>
      <div className="space-y-3">
        {orders.map((order) => (
          <SingleOrder key={order._id} singleOrder={order}></SingleOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
