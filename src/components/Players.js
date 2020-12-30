import React, { Component } from 'react'
import {Link, Route, Switch} from "react-router-dom"
import {getPlayers} from "../api"

import Player from "./Player"
import Sidebar from "./Sidebar"

export default class Players extends Component {
	state = {
		players: []
	}

	componentDidMount(){
		getPlayers().then(res => {
			this.setState({
				players: res
			}, () => {
				console.log(this.state.players)
			})
		})
	}

	render() {
		return (
			<Sidebar title="Players" list={this.state.players} type="player">
					<Switch>
						<Route path={`/players/:playerId`} exact render={(routeProps) => <Player {...routeProps} />} />
						<Route render={() => <h2>Select a player</h2>} />
					</Switch>
			</Sidebar>
		)
	}
}