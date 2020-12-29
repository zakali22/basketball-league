import React, { Component } from 'react'
import {Link, Route, Switch} from "react-router-dom"
import {getPlayers} from "../api"

import Player from "./Player"

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
			<div className="container row two-column">
				<div className="">
					<h3 className="header">Players</h3>
					<nav className="sidebar-list">
						{
							this.state.players.map(({name}) => (
								<Link key={name} to={{
									pathname: `/players/${name.split(' ').join('-')}`,
									state: {
										players: this.state.players
									}
								}}>{name}</Link>
							))
						}
					</nav>
				</div>
				<div className="panel">
					<Switch>
						<Route path={`/players/:playerId`} exact render={(routeProps) => <Player {...routeProps} />} />
						<Route render={() => <h2>Select a player</h2>} />
					</Switch>
				</div>
			</div>
		)
	}
}
