import './App.css';
import React, { useState } from "react"
// import LoginButton from './components/login';
// import LogoutButton from './components/logout';
// import Profile from './components/profile';
import Header from "./components/header";
import Footer from "./components/footer";
import Search from "./components/search";
// import * as parksData from "./data/skateboard-parks.json";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/react-hooks';


// we need to establish the connection to the back-end server's /graphql endpoint. establish a new link to the GraphQL server at its /graphql endpoint with createHttpLink()
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// instantiate a new cache object using new InMemoryCache()
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  const [currentTab, setCurrentTab] = useState("search");
  
  const renderTab = () => {
    switch (currentTab) {
      case "search":
        return <Search />;
      //case "contact":
      //return <Contact />;
      //case "register":
      //return <Register />;
      //case "profile":
      //return <Profile />;
      //case "login":
      //return <Login />;
      default:
        return null;
    }
  }

  return (

    <ApolloProvider client={client}>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <main>
        {renderTab()}
      </main>
      <div>
        <Footer></Footer>
      </div>

    </ApolloProvider>
  );
}

export default App;