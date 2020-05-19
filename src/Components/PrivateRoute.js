import React from 'react'
import {

    Route,
    Redirect
} from "react-router-dom";

export default function PrivateRoute({ authenticated, component, children, path }) {

    if (!authenticated) {

        return <Redirect to="/"></Redirect>

    }


    return (
        <Route exact path={path} component={component}>
            {children}
        </Route>
    )

}
