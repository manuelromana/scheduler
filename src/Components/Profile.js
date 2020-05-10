// src/components/NavBar.js

import React from "react";
import { Auth0Context } from "../react-auth0-spa"
import { Link } from "react-router-dom";

const Profile = () => {


    return (
        <Auth0Context.Consumer>
            {({ isAuthenticated, user }) => {
                if (!isAuthenticated) {
                    return <div>Loading...</div>;
                }
                console.log(user)
                return (
                    <React.Fragment>
                        <img src={user.picture} alt="Profile" />

                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </React.Fragment>
                )
            }
            }
        </Auth0Context.Consumer>

    );
};

export default Profile;