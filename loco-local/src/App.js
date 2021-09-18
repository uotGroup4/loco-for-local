
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
//import Contact from "./components/Contact";
//import Profile from "./components/Profile";
//import Login from "./components/Login";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  // This function checks to see which tab is selected and then generates the appropriate tab.
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
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}>


        </Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App