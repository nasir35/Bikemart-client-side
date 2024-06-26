import React from "react";

const SingleOrder = ({ singleOrder }) => {
  const { productName, customerName, orderId, price, productImg, orderStatus } =
    singleOrder;

  //DELETE an order
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel the order?"
    );
    if (proceed) {
      const url = `https://bikemart-server-side-nasir35.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount == 1) {
            alert("Order Cancelled Successfully!");
          }
        });
    }
  };

  return (
    <div>
      <div
        id="order-items-container"
        className="grid grid-cols-12 bg-gray-100 py-1 items-center shadow rounded"
      >
        <div
          id="order-id-container"
          className="lg:col-span-3 px-2 col-span-12 flex lg:flex-col justify-between lg:border-0 border-b-2 border-gray-300"
        >
          <h6 className="font-medium font-roboto">Order Id : {orderId}</h6>
          <p className="font-roboto sm:block hidden">
            Placed by: {customerName}
          </p>
        </div>
        <div
          id="order-img-title-container"
          className="lg:col-span-6 col-span-8 sm:pl-3 pt-1 sm:flex hidden sm:space-x-2 space-x-1 items-center"
        >
          <img src={productImg} alt="" className="h-16 rounded object-cover" />
          <div className="flex flex-col flex-grow lg:space-y-2 space-y-1">
            <h2 className="lg:text-xl text-lg font-roboto font-medium">
              {productName}
            </h2>
            <div className="flex justify-between font-medium">
              <p>{price}</p>
              <p
                className={`font-qsand ${
                  orderStatus.includes("pending")
                    ? "text-coral"
                    : "text-green-custom"
                }`}
              >
                {orderStatus}
              </p>
            </div>
          </div>
        </div>

        {/* this section re-written for mobile devices */}
        <h2 className="col-span-12 px-2 font-roboto font-medium sm:hidden block justify-start">
          {productName}
        </h2>
        <div className="col-span-8 sm:hidden px-1 flex items-center">
          <img
            src={productImg}
            alt=""
            className="h-16 rounded object-cover sm:hidden inline-block"
          />
          <div className="inline-block pl-2">
            <p className="text-gray-800 font-medium">{price}</p>
            <p
              className={`${
                orderStatus.includes("pending")
                  ? "text-coral"
                  : "text-green-custom"
              }`}
            >
              {orderStatus}
            </p>
          </div>
        </div>
        {/* end of duplicate codes */}

        <div
          id="action-div"
          className="lg:col-span-3 col-span-4 flex xl:flex-row justify-end gap-x-2 flex-col items-end md:pr-5 pr-2 py-1 space-y-2 text-right"
        >
          <button
            className="sm:px-3 px-2 sm:text-base text-sm bg-red-400 xl:w-auto w-3/4 text-gray-800 rounded font-medium py-1"
            onClick={() => handleDelete(singleOrder._id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
