import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LimitUserRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <div className="flex justify-center items-center py-6">
                <div className="animate-bounce text-stromboli mr-5 font-qsand font-medium">loading...</div>
                <div className=" animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral"></div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render = {({location}) => 
                user?.email ?
                <Redirect
                to={{
                    pathname : "/login-protected",
                    state : {from : location}
                }}
                ></Redirect>
                : children 
            }
        >            
        </Route>
    );
};

export default LimitUserRoute;