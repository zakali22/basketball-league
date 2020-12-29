import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {getTeamNames} from "../api"
import TeamLogo from "./TeamLogo"

export default class Home extends Component {
	state = {
		teamsNames: []
	}

	componentDidMount(){
		getTeamNames().then((res) => {
			this.setState({
				teamsNames: res
			}, () => {
				console.log(this.state.teamsNames)
			})
		})
	}

	render() {
		return (
			<div className="container">
				<h1 className="large-header">Hash History Basketball League</h1>
				<h3 className="header text-center">Select a team</h3>
				<div className="home-grid">
					{
						this.state.teamsNames.map((teamName) => (
							<Link to={`/${teamName}`}>
								<TeamLogo key={teamName} id={teamName} width="125px"/>
							</Link>
						))
					}
				</div>
			</div>
		)
	}
}
