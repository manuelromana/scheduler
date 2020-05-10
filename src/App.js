import React, { useState, useEffect, useContext } from "react"
import createAuth0Client from '@auth0/auth0-spa-js';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import { Auth0Context } from "./react-auth0-spa"
import { makeClient } from "./apollo"
import AgendaNetworking from "./features/AgendaNetworking"
import { AgendaNetworkContextProvider } from "./features/Agenda/AgendaNetworkContext"
import { AgendaInContext } from "./features/Agenda/Agenda_in_context"
import { FormValidationEvent } from "./features/Agenda/Form_event_in_context"
import Dialog from "./features/Agenda/Dialog_in_context"
import NavBar from "./Components/NavBar"
import Draggable from "./Components/Test"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profile from "./Components/Profile"
import Layout from "./features/Page/Layout"

export const App = () => {
  const { tokenState } = useContext(Auth0Context)
  //console.log(tokenState);
  //if (!tokenState) return <div>loading...</div>
  const client = makeClient(tokenState)


  return (

    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" ></Route>

            <Route exact path="/profile" component={Profile}></Route>

            <Route exact path="/test" >
              <AgendaNetworkContextProvider>
                <AgendaInContext></AgendaInContext>
                <Dialog>
                  <FormValidationEvent></FormValidationEvent>
                </Dialog>
              </AgendaNetworkContextProvider>
            </Route>
            <Route exact path="/agenda" component={AgendaNetworking}></Route>
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>





  )
}










