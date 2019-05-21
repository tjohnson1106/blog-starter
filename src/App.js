import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { About } from "./pages/about";
import { Home } from "./pages/home";

import { Navbar } from "./components/Navbar";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
