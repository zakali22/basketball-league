import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {getTeam} from "../api"
import TeamLogo from "./TeamLogo"
import Loading from "./Loading"

class TeamSummary extends Component {
  state = {
    team: null,
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
      team: null,
      loading: true
    })

    getTeam(teamId).then(res => {
      console.log(res)
      this.setState({
        team: res
      }, () => {
        window.setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 1000)
      })
    })
  }

  render() {
    const {team, loading} = this.state;
    if(loading) return <Loading />
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