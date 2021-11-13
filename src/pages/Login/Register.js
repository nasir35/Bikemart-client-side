import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Register = () => {
    const [isPassMatched, setIsPassMatched] = useState('');
    const {registerUser, authError} = useAuth() || {};
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        if(data.password!==data.password2){
           setIsPassMatched('Error: Password didn\'t matched');
            return;
        }
        setIsPassMatched('');
        if(data.photoURL===''){
            data.photoURL= 'https://i.ibb.co/zmPpTp7/transparent-user-icon.png';
        }
        const {email, password, name, photoURL} = data;
        console.log(data);
        registerUser(email, password, name, photoURL, history);
        reset();
    };

    return (
        <>
        <Header></Header>
        <div className="xl:px-10 lg:px-8 md:px-4 px-3 py-4 grid grid-cols-12 bg-gray-300 justify-center items-center">
            <div id="img-container" className="md:col-span-5 col-span-12">
                <img src="https://i.ibb.co/30xwYXF/photo-1570784063106-7431cb7c3d53.jpg" className="rounded w-full" alt="" />
            </div>
            <div id="form-container" className="xl:px-10 lg:px-7 md:pt-0 pt-6 sm:px-4 px-1 space-y-2 md:col-span-7 col-span-12">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="md:pb-2 sm:pb-1 pb-0.5 border-b-4 inline-block border-green-custom px-4 rounded text-gray-800 md:text-3xl sm:text-2xl text-xl font-medium">Register a new account</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="md:py-4 py-2 ">
                    <div className="grid grid-cols-12 pb-3 sm:gap-5 gap-1 items-center justify-center">
                        <label htmlFor="name" className="sm:col-span-3 col-span-12 font-medium text-stromboli lg:text-base md:text-sm text-base">Name</label>
                        <input {...register("name")} id="name" type="text" placeholder="your name" className=" sm:col-span-9 col-span-12 bg-gray-50 rounded border-2 border-transparent focus:outline-none focus:border-indigo-400 py-1 lg:px-3 px-2" required/>
                    </div>
                    <div className="grid grid-cols-12 pb-3 sm:gap-5 gap-1 items-center justify-center">
                        <label htmlFor="photo" className="sm:col-span-3 col-span-12 font-medium text-stromboli lg:text-base md:text-sm text-base">Image Link</label>
                        <input {...register("photoURL")} id="photo" type="text" placeholder="https://www.myimg.com.png (optional)" className=" sm:col-span-9 col-span-12 bg-gray-50 rounded border-2 border-transparent focus:outline-none focus:border-indigo-400 py-1 lg:px-3 px-2"/>
                    </div>
                    <div className="grid grid-cols-12 pb-3 sm:gap-5 gap-1 items-center justify-center">
                        <label htmlFor="email" className="sm:col-span-3 col-span-12 font-medium text-stromboli lg:text-base md:text-sm text-base">Email</label>
                        <input {...register("email")} id="email" type="email" placeholder="your email" className=" sm:col-span-9 col-span-12 bg-gray-50 rounded border-2 border-transparent focus:outline-none focus:border-indigo-400 py-1 lg:px-3 px-2" required/>
                    </div>
                    <div className="grid grid-cols-12 sm:gap-5 gap-1 pb-3 items-center justify-center">
                        <label htmlFor="pass" className="sm:col-span-3 col-span-12 font-medium text-stromboli lg:text-base md:text-sm text-base">Password</label>
                        <input {...register("password")} id="pass" type="password" placeholder="your password" className=" sm:col-span-9 col-span-12 bg-gray-50 rounded py-1 border-2 border-transparent focus:outline-none focus:border-indigo-400 lg:px-3 px-2" required/>
                    </div>
                    <div className="grid grid-cols-12 sm:gap-5 gap-1 pb-4 items-center justify-center">
                        <label htmlFor="pass2" className="sm:col-span-3 col-span-12 font-medium text-stromboli lg:text-base md:text-sm text-base">Re-type Password</label>
                        <input {...register("password2")} id="pass2" type="password" placeholder="your password" className=" sm:col-span-9 col-span-12 bg-gray-50 rounded py-1 border-2 border-transparent focus:outline-none focus:border-indigo-400 lg:px-3 px-2"/>
                    </div>
                    <p className="text-red-600">{isPassMatched}</p>
                    <div className="text-center">
                        <button className="bg-blue-700 px-6 py-1 text-lg rounded text-gray-100"><i className="fas fa-unlock mr-4 text-blue-300"></i>Register</button>
                    </div>
                </form>
                <NavLink to="/login" className="text-indigo-900 flex justify-center items-center">Already have an account? Login <i className="ml-2 fas fa-paper-plane"></i></NavLink>
            </div>            
        </div>
        <div className="text-center text-red-600 bg-red-200">{authError}</div>
        <Footer></Footer>
        </>
    );
};

export default Register;