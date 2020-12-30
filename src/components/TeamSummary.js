import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {getTeam} from "../api"
import TeamLogo from "./TeamLogo"

class TeamSummary extends Component {
  state = {
    team: null
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
      team: null
    })

    getTeam(teamId).then(res => {
      console.log(res)
      this.setState({
        team: res
      })
    })
  }

  render() {
    const {team} = this.state;
    if(!team) return <h2>Loading</h2>
    return (
      <div style={{width: "100%"}}>
        <TeamLogo id={team.id} className="center"/>
        <h1 className="medium-header">{team.name}</h1>
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
        <Link to={`/${team.id}`} className="btn-main center" >{`${team.name} Team Page`}</Link>
      </div>
    )
  }
}

export default TeamSummary