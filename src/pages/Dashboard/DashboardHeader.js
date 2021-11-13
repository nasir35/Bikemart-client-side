import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const DashboardHeader = ({btn, handleSideMenu}) => {
    const {user, admin} = useAuth() || {};
    return (
        <div className="bg-gray-800 text-gray-100 lg:px-6 px-3 grid grid-cols-12 md:py-1 py-2 items-center">
            <div className="lg:col-span-2 md:col-span-3 col-span-6 flex items-center">
                <h2><i ref={btn} onClick={handleSideMenu} className="fas fa-bars md:hidden text-xl text-red-500 mr-3"></i></h2>
                <Link to="/dashboard"><h2 className="mr-5 md:text-2xl text-xl text-coral">Dashboard</h2></Link>
            </div>
            <div className="lg:col-span-6 col-span-6 ">
            <h2 className="md:text-2xl text-xl md:text-left text-right font-qsand text-green-custom">{admin ? 'Admin panel' : 'User panel'}</h2>
            </div>
            <div className="col-span-4 md:flex hidden justify-end items-center space-x-2">
                {/* <h2 className=""><i className="fas fa-bell"></i> Notifications</h2> */}
                <img src={user?.photoURL} className="w-10 h-10 rounded-full bg-gray-500" alt=""/>
                <h2>{user?.displayName}</h2>
            </div>
        </div>
    );
};

export default DashboardHeader;