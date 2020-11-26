import * as React from 'react';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from './Header';
import TodoPrivateWrapper from './Todo/TodoPrivateWrapper';
import TodoPublicWrapper from './Todo/TodoPublicWrapper';
import OnlineUsersWrapper from './OnlineUsers/OnlineUsersWrapper';

import { useAuth0 } from "./Auth/react-auth0-spa";

const createApolloClient = (authToken: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://hasura.io/learn/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
 }

const App = ({idToken}:{idToken:string}) => {
  const { loading, logout  } = useAuth0();
  if(loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      <Header logoutHandler={logout} />
      <div className="container-fluid p-left-right-0">
        <div className="col-xs-12 col-md-9 p-left-right-0">
          <div className="col-xs-12 col-md-6 sliderMenu p-30">
            <TodoPrivateWrapper />
          </div>
          <div className="col-xs-12 col-md-6 sliderMenu p-30 bg-gray border-right">
            <TodoPublicWrapper />
          </div>
        </div>
        <div className="col-xs-12 col-md-3 p-left-right-0">
          <div className="col-xs-12 col-md-12 sliderMenu p-30 bg-gray">
            <OnlineUsersWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
