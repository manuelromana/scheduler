import React, { useContext } from "react"

import { ApolloProvider } from '@apollo/react-hooks';
import { Auth0Context } from "./react-auth0-spa"
import { makeClient } from "./apollo"

import { AgendaNetworkContextProvider } from "./features/Agenda/AgendaNetworkContext"
import { AgendaInContext } from "./features/Agenda/Agenda_in_context_selectable"
import { AgendaPublic } from "./features/Agenda/Agenda_public"
import { FormValidationEvent } from "./features/Agenda/Form_event_in_context"
import Dialog from "./features/Agenda/Dialog_in_context"
import PrivateRoute from "./Components/PrivateRoute"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./features/Page/Home"
import Profile from "./Components/Profile"
import Layout from "./features/Page/Layout"

export const App = () => {
  const { tokenState, isAuthenticated, user } = useContext(Auth0Context)
  //console.log(tokenState);
  //if (!tokenState) return <div>loading...</div>
  const client = makeClient(tokenState)


  return (

    <ApolloProvider client={client}>
      <Router>
        <Layout authenticated={isAuthenticated}>
          <Switch>
            <Route exact path="/" >
              {!isAuthenticated ?
                <AgendaNetworkContextProvider>
                  <AgendaPublic></AgendaPublic>
                </AgendaNetworkContextProvider>
                : <h2>welcome {user && user.name} </h2>

              }
            </Route>
            <PrivateRoute exact path="/profile" component={Profile} authenticated={isAuthenticated}></PrivateRoute>

            <PrivateRoute exact path="/agenda" authenticated={isAuthenticated}>
              <AgendaNetworkContextProvider>
                <AgendaInContext></AgendaInContext>
                <Dialog>
                  <FormValidationEvent></FormValidationEvent>
                </Dialog>
              </AgendaNetworkContextProvider>
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>





  )
}










