import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {getPlayers} from "../api"

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
								<Link key={name} to={`${this.props.match.url}/${name.split(' ').join('-')}`} cl>{name}</Link>
							))
						}
					</nav>
				</div>
				<div className="panel">
					<h2 className="header">Player</h2>
				</div>
			</div>
		)
	}
}
