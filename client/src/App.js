import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Search from "./containers/Search/Search"
import Saved from "./containers/Saved/Saved"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron/>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
