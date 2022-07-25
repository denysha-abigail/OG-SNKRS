import React from "react";
import logo from "../src/assets/images/nike_sneakers-brandlogo.net.png";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from "./components/Nav";
import SearchShoes from './components/pages/SearchShoes';
import SavedShoes from './components/pages/SavedShoes';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (

    <div>
       <Nav> </Nav>
        
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Can you kick it?</p>
            </header>
          </div>
    </div>
    
       
        
  );
}

export default App;
