import React, { Component } from 'react'
import {Link, Route, Switch} from "react-router-dom"
import {getPlayers} from "../api"
import {parse} from "query-string"

import Player from "./Player"
import Sidebar from "./Sidebar"

export default class Players extends Component {
	state = {
		players: []
	}

	componentDidMount(){
		getPlayers().then(res => {
			if(this.props.location.search){
				let query = this.props.location.search
				let {teamId} = parse(query)
				let playersInTeam = res.filter(player => player.teamId === teamId)
				
				this.setState({
					players: playersInTeam
				})

			} else {
				this.setState({
					players: res
				})
			}
		})
	}

	componentWillUnmount(){
		getPlayers().then(res => {
			this.setState({
				players: res
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