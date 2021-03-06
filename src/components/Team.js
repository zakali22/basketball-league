import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {getTeam, getTeamsArticles} from "../api"
import TeamLogo from "./TeamLogo"
import moment from "moment"
import Loading from "./Loading"

class Team extends Component {
  state = {
    team: null,
    teamArticles: null,
    loading: true
  }

  componentDidMount(){
    this.updateTeam()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.teamId !== this.props.match.params.teamId){
      this.updateTeam()
    }
  }

  updateTeam = () => {
    let teamId = this.props.match.params.teamId

    this.setState({
      loading: true
    })

    Promise.all([
      getTeam(teamId),
      getTeamsArticles(teamId)
    ]).then(res => {
      this.setState({
        team: res[0],
        teamArticles: res[1],
        loading: false
      })
    })
  }

  render() {
    const {team, teamArticles, loading} = this.state;
    if(loading) return <Loading />
    console.log(this.props.match.url)
    return (
      <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <TeamLogo id={team.id} className="center"/>
        <h1 className="medium-header">{team.name}</h1>
        <Link to={`/players?teamId=${team.id}`}><h4 style={{margin: "5px"}}>View Roster</h4></Link>
        <div>
          <h4 className="text-center">Championships</h4>
          <ul className="championships">
            {
              team.championships.map(period => (
                <li>{period}</li>
              ))
            }
          </ul>
        </div>
        <ul className="info-list row" style={{alignSelf: 'stretch'}}>
          <li>Established
            <div>{team.established}</div>
          </li>
          <li>Manager
            <div>{team.manager}</div>
          </li>
          <li>Coach
            <div>{team.coach}</div>
          </li>
        </ul>
        <div>
          <h4 className="header text-center">Articles</h4>
          <ul className="articles">
              {
                teamArticles ? (
                  teamArticles.map(article => (
                    <li key={article.id}>
                      <Link to={`${this.props.match.url}/articles/${article.id}`}>
                        <h4 className="article-title">{article.title}</h4>
                        <div className="article-date">{moment(article.date).format('L')}</div>
                      </Link>
                    </li>
                  ))
                ) : <p>Loading articles</p>
              }
          </ul>
        </div>
      </div>
    )
  }
}

export default Team