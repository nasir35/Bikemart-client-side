import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Login = () => {
    const {loginUser} = useAuth() || {};
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)
        console.log(data)
    };
    return (
        <>
        <Header></Header>
        <div className="xl:px-10 lg:px-8 md:px-4 px-3 py-4 grid md:grid-cols-2 grid-cols-1 bg-gray-300 lg:gap-7 gap-3">
            <div id="img-container">
                <img src="https://i.ibb.co/30xwYXF/photo-1570784063106-7431cb7c3d53.jpg" className="rounded" alt="" />
            </div>
            <div id="form-container" className="xl:px-10 lg:px-7 sm:px-2 space-y-2 flex flex-col justify-center items-center">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="md:pb-2 sm:pb-1 pb-0.5 border-b-4 inline-block border-green-custom px-4 rounded text-gray-800 md:text-3xl sm:text-2xl text-xl font-medium">Login</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                    <div className="grid grid-cols-12 pb-3 gap-5 items-center justify-center">
                        <label htmlFor="email" className="sm:col-span-2 col-span-3 font-medium text-stromboli lg:text-base md:text-sm text-base">Email</label>
                        <input {...register("email")} id="email" type="email" placeholder="your email" className=" sm:col-span-10 col-span-9 bg-gray-50 rounded border-2 border-transparent focus:outline-none focus:border-indigo-400 py-1 lg:px-3 px-2"/>
                    </div>
                    <div className="grid grid-cols-12 gap-5 pb-4 items-center justify-center">
                        <label htmlFor="pass" className="sm:col-span-2 col-span-3 font-medium text-stromboli lg:text-base md:text-sm text-base">Password</label>
                        <input {...register("password")} id="pass" type="password" placeholder="your password" className=" sm:col-span-10 col-span-9 bg-gray-50 rounded py-1 border-2 border-transparent focus:outline-none focus:border-indigo-400 lg:px-3 px-2"/>
                    </div>
                    <div className="text-center">
                        <button className="bg-blue-700 px-6 py-1 text-lg rounded text-gray-100"><i className="fas fa-unlock mr-4 text-blue-300"></i>Login</button>
                    </div>
                </form>
                <NavLink to="/login" className="text-indigo-900 flex justify-center items-center">New User? Register <i className="ml-2 fas fa-paper-plane"></i></NavLink>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;