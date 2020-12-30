import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import Players from "./Players"
import Player from "./Player"
import Teams from "./Teams"
import Navbar from "./Navbar"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/players" component={Players} />
        <Route path="/teams" exact component={Teams} />
        <Route render={() => <h2 className="large-header">404 page not found.</h2>} />
      </Switch>
    </React.Fragment>
  )
}

export default App