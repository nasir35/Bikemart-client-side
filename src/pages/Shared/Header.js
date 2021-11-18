import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
const Header = () => {

    const {user, logOut, isLoading} = useAuth() || {};

    const btn = useRef();
    const menu = useRef();

    const handleMenu = () => {
        menu.current.classList.toggle('hidden');
    }

    let name="UnKnown";
    if(isLoading === false && user?.displayName !== undefined){
        name = user?.displayName;
        if(name?.length>10 && name?.includes(' ')){
        const nameParts = name?.split(' ');
        if(nameParts?.length>1 && nameParts[0]?.length<=3){
            name=nameParts[0]?.concat(' ',nameParts[1]);
        }
        else{
            name=nameParts[0];
        }
    }
    else{
        name = user?.displayName;
    }
    }

    return (
        <div className="grid grid-cols-12 lg:px-10 md:px-4 px-3 py-2 bg-gray-800 text-white font-qsand">
            <div className="col-span-2">
                <Link to="/home"><h2 className="text-coral text-2xl font-medium">BikeMart</h2></Link>
            </div>
            <i onClick={handleMenu} ref={btn} className="fas fa-bars md:hidden col-span-10 sm:text-3xl text-2xl text-right"></i>
            <nav ref ={menu} className="md:col-span-10 md:flex hidden col-span-12 items-center">
                <div className="grid grid-cols-10 w-full">
                    <div className="md:col-span-6 col-span-10">
                        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center">
                            <NavLink to="/home" activeClassName="text-yellow" className="md:text-lg text-base font-medium  md:mr-4">Home</NavLink>
                            <NavLink to="/explore" activeClassName="text-yellow" className="md:text-lg text-base font-medium md:mr-4">Explore</NavLink>
                            <NavLink to="/blogs" activeClassName="text-yellow" className="md:text-lg text-base font-medium md:mr-4">Blogs</NavLink>
                            {
                                user?.email && 
                                <NavLink to="/dashboard" activeClassName="text-yellow" className="md:text-lg text-base font-medium ">Dashboard</NavLink>
                            }
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-10">
                        <div className="flex md:justify-end justify-center md:justify-self-end">                    
                            {user?.email ?
                            <span className="md:inline flex flex-col text-center">
                                <img src={user.photoURL} alt="" className="w-10 h-10 mx-auto rounded-full md:inline-block block" />
                                <h5 className="md:inline-block block px-2 md:text-sm lg:text-base">{name}</h5>
                                <button onClick={logOut} className="bg-coral text-white rounded px-4 py-0.5">Logout</button>
                            </span> :
                            <span className="md:inline text-center flex flex-col">
                                <NavLink to="/login" activeClassName="text-yellow" className="md:text-lg text-base font-medium  md:mr-4">Login</NavLink>
                                <NavLink to="/register" activeClassName="text-yellow" className="md:text-lg text-base font-medium ">Register</NavLink>
                            </span>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;