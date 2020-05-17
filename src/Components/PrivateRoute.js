import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import history from "../history"

export default function PrivateRoute({ authenticated, component, children, path }) {

    if (!authenticated) {
        console.log(authenticated);

        return <Redirect to="/"></Redirect>

    }


    return (
        <Route exact path={path} component={component}>
            {children}
        </Route>
    )

}
