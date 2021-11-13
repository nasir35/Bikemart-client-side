import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();
    if (!admin) {
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
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;