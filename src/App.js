import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing components
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div>
        {/* sidemenu nav */}
        <Sidebar />
        <Switch>
          {/* main component */}
          <Route exact path="/">
            <About />
          </Route>
          {/* skills component */}
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
