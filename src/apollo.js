import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from "apollo-link-error";
import history from "./history"

export const makeClient = (token) => {
    //console.log("token making apollo client", token);

    const httpLink = createHttpLink({
        uri: 'https://schedule-sarrebruck.herokuapp.com/v1alpha1/graphql',
        // context: { headers: { authorization: token ? `Bearer ${token}` : "" } }
    });
    const authLink = setContext((_, { headers }) => {

        return (
            token ? {
                headers: {
                    authorization: `Bearer ${token}`
                }
            } : {}
        )


    });

    const linkError = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );
        if (networkError) {
            console.log(`[Network error]: ${networkError}`);

        }
    });

    const client = new ApolloClient({
        link: linkError.concat(authLink.concat(httpLink)),
        cache: new InMemoryCache()
    });

    return client
} 
