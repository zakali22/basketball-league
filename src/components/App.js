import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import Players from "./Players"
import Player from "./Player"
import Teams from "./Teams"
import Navbar from "./Navbar"
import Team from "./Team"
import Articles from "./Articles"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/players" component={Players} />
        <Route path="/teams" component={Teams} />
        <Route path="/:teamId" exact component={Team} />
        <Route path="/:teamId/articles" component={Articles} />
        <Route render={() => <h2 className="large-header">404 page not found.</h2>} />
      </Switch>
    </React.Fragment>
  )
}

export default App