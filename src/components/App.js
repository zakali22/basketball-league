import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import Players from "./Players"
import Teams from "./Teams"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/players" exact component={Players} />
        <Route path="/teams" exact component={Teams} />
      </Switch>
    </div>
  );
}

export default App;
