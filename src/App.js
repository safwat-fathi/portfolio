import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import styles
import styles from "./App.module.css";

// importing components
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        {/* sidemenu nav */}
        <Sidebar />
        <div className={styles.content}>
          <Switch>
            {/* main component */}
            <Route exact path="/">
              <About />
            </Route>
            {/* skills component */}
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
