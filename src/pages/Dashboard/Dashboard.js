import React, { useRef } from 'react';
import { Switch, Route, NavLink, useRouteMatch} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute';
import DashboardHeader from './DashboardHeader';
import AddProduct from './ForAdmin/AddProduct';
import AllOrders from './ForAdmin/AllOrders';
import MakeAdmin from './ForAdmin/MakeAdmin';
import ManageProducts from './ForAdmin/ManageProducts';
import MyOrders from './ForUser/MyOrders';
import Pay from './ForUser/Pay';
import GiveReview from './ForUser/GiveReview';
import AddBlog from '../Home/Blog-section/AddBlog';
import AllReviews from './ForAdmin/AllReviews';

const Dashboard = () => {
    const {admin, logOut} = useAuth() || {};
        let { path, url } = useRouteMatch();
        const btn = useRef();
        const menu = useRef();
        const gridArea = useRef();
        let isOpen;
        const handleSideMenu = () => {
            menu.current.classList.toggle('hidden');           
            menu.current.classList.toggle('absolute');           
            gridArea.current.classList.toggle('grid-cols-12');
            isOpen = menu.current.classList.contains('absolute');
        }
        const handleMenu = e => {
            if(e.currentTarget !== e.target && isOpen===true ){
                menu.current.classList.toggle('hidden');
                menu.current.classList.toggle('absolute');
                isOpen = false;
            }
            e.stopPropagation();
        }

        const drawer = (
            <div className="flex flex-col text-white space-y-2 md:pb-6 pb-10" style={{height: '91.5vh'}}>
                <div className="flex">
                    {!admin ? <div className="flex flex-col text-white space-y-2">
                        <NavLink to={`${url}/myorders`} activeClassName="bg-gray-500 rounded py-1"><button className="uppercase px-4 flex items-center gap-x-1 justify-start"><i className="fas fa-cart-arrow-down"></i>My Orders</button></NavLink>
                        <NavLink to={`${url}/pay`} activeClassName="bg-gray-500 rounded py-1"><button className="uppercase px-4 flex items-center gap-x-1 justify-start"><i className="fab fa-paypal"></i> Payment</button></NavLink>
                        <NavLink to={`${url}/review`} activeClassName="bg-gray-500 rounded py-1"><button className="uppercase px-4 flex items-center gap-x-1 justify-start"><i className="fas fa-edit"></i>Review</button></NavLink>
                        </div>
                    : <div className="flex flex-col text-white md:space-y-3 space-y-2">
                        <NavLink to={`${url}/makeAdmin`} activeClassName="bg-gray-500 rounded py-1"><button className="xl:uppercase lg:capitalize uppercase lg:px-3 px-5 flex items-center gap-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Make Admin</button></NavLink>
                        <NavLink to={`${url}/addproduct`} activeClassName="bg-gray-500 rounded py-1"><button className="xl:uppercase lg:capitalize uppercase lg:px-3 px-5 flex items-center gap-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg> Add A Product</button></NavLink>
                        <NavLink to={`${url}/products`} activeClassName="bg-gray-500 rounded py-1"><button className="xl:uppercase lg:capitalize uppercase lg:px-3 md:px-3 px-5 flex font-medium items-center gap-x-1 2xl:text-base text-sm font-qsand"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>Manage Products</button></NavLink>
                        <NavLink to={`${url}/orders`} activeClassName="bg-gray-500 rounded py-1"><button className="xl:uppercase lg:capitalize uppercase lg:px-3 px-5 flex items-center font-medium gap-x-1 font-qsand 2xl:text-base text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> Manage Orders</button></NavLink>
                        <NavLink to={`${url}/reviews`} activeClassName="bg-gray-500 rounded py-1"><button className="xl:uppercase lg:capitalize uppercase lg:px-3 px-5 flex items-center font-medium gap-x-1 font-qsand 2xl:text-base text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> Manage Reviews</button></NavLink>
                        <NavLink to={`${url}/add-blog`} activeClassName="bg-gray-500 rounded py-1"><button className="xl:uppercase lg:capitalize uppercase lg:px-3 px-5 flex items-center font-medium gap-x-1 font-qsand 2xl:text-base text-sm"><i class="far fa-edit text-lg pl-1"></i> Add A Blog</button></NavLink>
                    </div>}
                </div>
                <div className="flex flex-col justify-end flex-auto items-start uppercase space-y-2">
                    <NavLink to="/explore" className="hover:bg-gray-500 px-5 rounded"><i className="h-7 fas text-lg fa-biking w-7  bg-gray-100  text-gray-700 rounded-full"></i> Explore</NavLink>
                    <NavLink to="/home" className="flex items-center hover:bg-gray-500 px-5 rounded gap-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-0.5 bg-gray-100  text-gray-700 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> Home</NavLink>
                    <button className="hover:bg-gray-500 px-5 rounded flex gap-x-1 items-center justify-center uppercase hover:py-1 text-white" onClick={logOut}><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-0.5 bg-gray-100  text-gray-700 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Log Out</button>
                </div>
            </div>
        );

    return (
        <div className="bg-gray-200">
            <DashboardHeader btn={btn} handleSideMenu={handleSideMenu}></DashboardHeader>
            <div ref={gridArea} className="grid grid-cols-12 relative">
                <div id="side-menu" onClick={handleMenu} ref={menu} className="md:flex hidden justify-center lg:col-span-2 col-span-3 bg-gray-600 text-center md:px-0 px-12 pt-5" style={{height : '92vh'}}>
                    <div className="flex flex-col items-center">
                        {drawer}
                    </div>
                </div>
                <div id="routing-area" className="lg:col-span-10 md:col-span-9 col-span-12 bg-gray-200 h-full" style={{minHeight: '92vh'}}>
                    <Switch>
                        <Route path={`${path}/pay`}><Pay></Pay></Route>
                        {admin ? <Route exact path={`${path}`}><MakeAdmin></MakeAdmin></Route>
                        : <Route exact path={`${path}`}><MyOrders></MyOrders></Route>}
                        <Route path={`${path}/myorders`}><MyOrders></MyOrders></Route>
                        <Route path={`${path}/review`}><GiveReview></GiveReview></Route>
                        <AdminRoute path={`${path}/makeAdmin`}><MakeAdmin></MakeAdmin></AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}><AddProduct></AddProduct></AdminRoute>
                        <AdminRoute path={`${path}/products`}><ManageProducts></ManageProducts></AdminRoute>
                        <AdminRoute path={`${path}/orders`}><AllOrders></AllOrders></AdminRoute>
                        <AdminRoute path={`${path}/reviews`}><AllReviews></AllReviews></AdminRoute>
                        <AdminRoute path={`${path}/add-blog`}><AddBlog></AddBlog></AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;