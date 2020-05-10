import React, { useContext, useState, useEffect } from "react"
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';
import { useLocation } from "react-router-dom"
import history from "./history"


export const Auth0Context = React.createContext()

export const Auth0ContextProvider = ({ children }) => {
  const [auth0client, setAuth0] = useState()
  const [tokenState, setToken] = useState()
  const [user, setUser] = useState()
  const [isAuthenticated, setAuthenticated] = useState()
  const [errorAuth, setErrorAuth] = useState()


  useEffect(() => {
    const initAuth = async () => {
      try {
        const auth0clientResult = await createAuth0Client({
          domain: 'dev-vdvdansc.eu.auth0.com',
          client_id: 'Mv9Rf5lrJKhpas6d4st9DtPahyOMXh8Z',
          redirect_uri: 'http://localhost:3001'
        });
        //const tok = await auth0clientResult.getTokenSilently()
        //console.log("tok", tok);

        setAuth0(auth0clientResult)


        if (window.location.search.includes("code=") &&
          window.location.search.includes("state=")) {
          const handleRedirect = await auth0clientResult.handleRedirectCallback();

          history.push("/")
        }

        const authenticationResult = await auth0clientResult.isAuthenticated();
        setAuthenticated(authenticationResult)

        const user = await auth0clientResult.getUser()
        setUser(user)

        const token = await auth0clientResult.getIdTokenClaims()
        setToken(token.__raw)

        //console.log("authenticatedInfo", authenticationResult, user, "token", token);


      } catch (error) {
        setErrorAuth(error.error_description)
      }


    }
    initAuth()
  }, []);

  //console.log(errorAuth);

  async function Login() {
    await auth0client.loginWithRedirect(
      //   {
      //   appState: {
      //     targetUrl: "http://localhost:3001/callback"
      //   }
      // }
    )
  }
  async function logout() {
    await auth0client.logout()
  }


  if (!auth0client) {
    return <div>loading...</div>
  }
  //console.log("result", auth0client, "url", window.location, "user", user, "authentication", isAuthenticated, "token", tokenState);

  return (
    <Auth0Context.Provider
      value={{
        Login,
        logout,
        isAuthenticated,
        user,
        tokenState,
      }}
    >
      {children}
    </Auth0Context.Provider>
  )

}