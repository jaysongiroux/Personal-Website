import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Projects, SideLinks } from "./components";
function App() {
  return (
      <div className="App">
          <Router>
          <Navigation />
            <SideLinks />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/contact"  component={() => <Contact />} />
              <Route path="/projects" component={() => <Projects />} />
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;