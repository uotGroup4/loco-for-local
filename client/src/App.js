import './App.css';
import React, { useState } from "react"
//import LoginButton from './components/login';

//import Profile from './components/profile';
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/Home";
// import * as parksData from "./data/skateboard-parks.json";

// import react router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import About from './pages/About';

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

  const [currentTab, setCurrentTab] = useState("home");

  return (

    <ApolloProvider client={client}>
      <Router>
        <>
          <div className="mobile-header">
            <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
          </div>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/about' component={About} />
              <Route exact path='/dashboard/:username?' component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <footer>
          <Footer />

          </footer>

        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;