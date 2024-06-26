import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";

const AddProduct = () => {
  const [rating, setRating] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.rating = rating ? rating : "4";
    fetch(
      "https://bikemart-server-side-bem11l6mg-nasir35s-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("Product added successfully!");
          reset();
        } else {
          alert("Adding Product failed.");
        }
      });
  };

  return (
    <div className="my-5">
      <div className="text-center">
        <h2 className="inline-block text-2xl text-stromboli  font-medium border-b-4 pb-0.5 font-qsand px-4 rounded border-coral mb-5">
          Add a Product
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-3/4 w-full mx-auto"
      >
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
          <label htmlFor="img" className="col-span-3 font-medium text-gray-600">
            Image Link
          </label>
          <input
            {...register("img")}
            id="img"
            className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded text-stromboli"
            placeholder="https://www.image.com/1.png"
            defaultValue="https://i.ibb.co/qgBZWPp/bicycle1.jpg"
          />
        </div>
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
          <label
            htmlFor="title"
            className="col-span-3 font-medium text-gray-600"
          >
            Product Title
          </label>
          <input
            {...register("title")}
            id="title"
            className="border col-span-9 px-3 py-1 bg-gray-50 mb-1 rounded text-stromboli"
            placeholder="Duranta Gear Bicycle"
            required
          />
        </div>
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
          <label
            htmlFor="price"
            className="col-span-3 font-medium text-gray-600"
          >
            Price
          </label>
          <input
            {...register("price")}
            id="price"
            className="border col-span-9 px-3 py-1 text-stromboli bg-gray-50 mb-1 rounded"
            placeholder="$115"
            required
          />
        </div>
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 items-center gap-x-2">
          <label
            htmlFor="description"
            className="col-span-3 font-medium sm:text-base text-sm text-gray-600"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            className="border col-span-9 text-stromboli px-3 py-1 bg-gray-50 mb-1 rounded"
            placeholder="Describe product details..."
            required
          />
        </div>
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
          <label
            htmlFor="rating"
            className="col-span-3 font-medium text-gray-600"
          >
            Rating
          </label>
          <div className="col-span-9">
            <Rating
              placeholderRating={rating}
              placeholderSymbol="fas fa-star text-coral text-xl"
              onClick={(rate) => setRating(rate)}
              emptySymbol="far fa-star text-coral text-xl"
              fullSymbol="fas fa-star text-coral text-xl"
            ></Rating>
            <input
              type="text"
              className="px-3 py-0.5 ml-5 bg-gray-100  rounded text-stromboli"
              defaultValue={rating}
              readOnly
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
          <label
            htmlFor="ratedBy"
            className="col-span-3 font-medium text-gray-600"
          >
            Rated By
          </label>
          <input
            {...register("ratedBy")}
            id="ratedBy"
            className="border col-span-9 px-3 py-1 text-stromboli bg-gray-50 mb-1 rounded"
            placeholder="103"
            defaultValue="107"
          />
        </div>
        <div className="w-full grid grid-cols-12 border-b mb-3 px-4 gap-x-2 items-center">
          <label
            htmlFor="bikeType"
            className="col-span-3 font-medium text-gray-600"
          >
            Bike Type
          </label>
          <select
            {...register("bikeType")}
            id="bikeType"
            className="col-span-9 mb-1 bg-gray-50 text-stromboli px-3 py-1 rounded"
          >
            <option value="City Bike">City Bike</option>
            <option value="Mountain Bike">Mountain Bike</option>
            <option value="Hybrid Bike">Hybrid Bike</option>
            <option value="Kids Bike">Kids Bike</option>
            <option value="Girls Bike">Girls Bike</option>
          </select>
        </div>
        <input
          type="submit"
          className="px-8 py-2 bg-green-custom cursor-pointer hover:bg-white border-2 border-green-custom hover:border-green-custom text-lg font-medium font-mono text-white hover:text-green-custom transition rounded mt-5 block mx-auto"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
