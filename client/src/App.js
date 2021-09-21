import './App.css';
import React, { useState } from "react"
//import LoginButton from './components/login';
// import LogoutButton from './components/logout';
//import Profile from './components/profile';
import Header from "./components/header";
import Footer from "./components/footer";
import Search from "./components/search";
// import * as parksData from "./data/skateboard-parks.json";

// import react router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/react-hooks';
import { setContext } from '@apollo/client/link/context';


// we need to establish the connection to the back-end server's /graphql endpoint. establish a new link to the GraphQL server at its /graphql endpoint with createHttpLink()
const httpLink = createHttpLink({
  uri: '/graphql',
});

// retrieve token (for logged in user) and combine with existing httpLink
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: { 
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// instantiate a new cache object using new InMemoryCache()
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [currentTab, setCurrentTab] = useState("search");

  return (

    <ApolloProvider client={client}>
      <Router>
        <>
          <div className="mobile-header">
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
          </div>
          <main className="container">
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/dashboard/:username?' component={Dashboard} />

              <Route component={NoMatch} />
            </Switch>
          </main>
          
          <Footer></Footer>
      
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;