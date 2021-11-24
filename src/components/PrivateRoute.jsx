import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute(props) {
    const token = useSelector((state) => state.login.access_token) 

    return (
        <Route 
            render={ (property) => {
                const { location } = property

                if (token) {
                    return props.children
                } else { 
                    return <Redirect to={ {pathname: '/signin', state: { from: location }} }/>
                }
            }}
        ></Route>
    )
}

export default PrivateRoute