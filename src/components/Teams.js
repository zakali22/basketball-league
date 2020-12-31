import React, { Component } from 'react'
import {Link, Route, Switch} from "react-router-dom"
import {getTeamNames} from "../api"

import TeamSummary from "./TeamSummary"
import Sidebar from "./Sidebar"

export default class Teams extends Component {
	state = {
		teams: []
	}

	componentDidMount(){
		getTeamNames().then(res => {
			console.log(res)
			this.setState({
				teams: res
			}, () => {
				console.log(this.state.teams)
			})
		})
	}

	render() {
		return (
			<Sidebar title="Teams" list={this.state.teams} type="teams">
					<Switch>
						<Route path={`/teams/:teamId`} exact render={(routeProps) => <TeamSummary {...routeProps} />} />
						<Route render={() => <h4>Select a team</h4>} />
					</Switch>
			</Sidebar>
		)
	}
}