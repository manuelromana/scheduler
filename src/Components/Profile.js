// src/components/NavBar.js

import React from "react";
import { Auth0Context } from "../react-auth0-spa"
import { Link } from "react-router-dom";

const Profile = () => {


    return (
        <Auth0Context.Consumer>
            {({ isAuthenticated, user }) => {
                if (!isAuthenticated) {
                    console.log("profile");

                    return <div>Loading...</div>;
                }
                console.log("user", user)
                return (
                    <React.Fragment>
                        <img src={user && user.picture} alt="Profile" />

                        <h2>{user && user.nickname}</h2>
                        <p>{user && user.email}</p>
                    </React.Fragment>
                )
            }
            }
        </Auth0Context.Consumer>

    );
};

export default Profile;