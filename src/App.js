import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {hashHistory} from "react-router-dom"
import { Navigation, Footer, Home, About, Contact, Projects, SideLinks } from "./components";import {
    HashRouter,
    Route,
} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <HashRouter>
          <Navigation />
            <SideLinks />
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/contact"  component={() => <Contact />} />
            <Route path="/projects" component={() => <Projects />} />
          <Footer />
        </HashRouter>
      </div>
  );
}

export default App;