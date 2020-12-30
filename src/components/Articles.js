import React, { Component } from 'react'
import {Link, Route, Switch} from "react-router-dom"
import {getTeamsArticles} from "../api"

import ArticleSummary from "./ArticleSummary"
import Sidebar from "./Sidebar"

export default class Articles extends Component {
	state = {
		articles: null
	}

	componentDidMount(){
    const {teamId} = this.props.match.params
    getTeamsArticles(teamId).then(res => {
      this.setState({
        articles: res  
      })
    })
	}

	render() {
    const {articles} = this.state;
    if(!articles) return <h3>Loading</h3>

		return (
			<Sidebar title="Articles" list={this.state.articles} type="articles">
					<Switch>
						<Route path={`${this.props.match.path}/:articleId`} exact render={(routeProps) => <ArticleSummary {...routeProps} />} />
						<Route render={() => <h2>Select an article</h2>} />
					</Switch>
			</Sidebar>
		)
	}
}