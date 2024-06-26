import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useAuth();
  const [success, setSuccess] = useState("");

  const onSubmit = (data) => {
    fetch(
      "https://bikemart-server-side-bem11l6mg-nasir35s-projects.vercel.app/users/admin",
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          console.log(data);
          setSuccess("Made Admin successfully!");
          reset();
        } else if (
          data.acknowledged &&
          data.modifiedCount === 0 &&
          data.matchedCount === 1
        ) {
          setSuccess("OOPS! The user is Already an Admin!");
          reset();
        } else if (data.acknowledged && data.matchedCount === 0) {
          setSuccess("Failed! there is no account associated with this email!");
          reset();
        }
      });
  };

  return (
    <div className="my-4">
      <div className="text-center">
        <h2 className="inline-block border-coral text-stromboli text-2xl px-4 border-b-4 rounded font-semibold font-qsand">
          Make Admin
        </h2>
        <p className="w-3/4 pt-3 pb-5 text-gray-600 mx-auto">
          <strong>Instructions: </strong> to make an admin, first ensure the
          email is already registered as user. And after clicking on make admin
          button, please wait a seconds to get the feedback!
        </p>
      </div>
      <div className="text-center my-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
          <input
            type="email"
            {...register("email")}
            className="block w-5/6 mx-auto border-2 rounded px-3 py-1 mb-3"
            placeholder="Email"
            id="email"
          />
          <input
            type="submit"
            value="Make Admin"
            className="px-10 mb-3 py-1 rounded cursor-pointer bg-green-custom text-white text-xl"
          />
        </form>
        <p
          className={`underline ${
            success?.includes("successfully")
              ? "text-green-custom"
              : "text-coral"
          }`}
        >
          {success}
        </p>
      </div>
    </div>
  );
};

export default MakeAdmin;
