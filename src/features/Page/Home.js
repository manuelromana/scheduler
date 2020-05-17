import React, { useEffect } from 'react';

function Home({ isAuthenticated }) {
    useEffect(() => {
        console.log("effect");

    }, [])

    return (
        <div>
            this is home
        </div>
    )
}

export default Home;
