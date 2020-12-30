import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

class Player extends Component {
  state = {
    player: null
  }

  componentDidMount(){
    this.updatePlayer()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.playerId !== this.props.match.params.playerId){
      this.updatePlayer()
    }
  }

  updatePlayer = () => {
    let playerId = this.props.match.params.playerId
    let player = this.props.location.state.list.find(player => player.name.split(' ').join('-') === playerId)

    this.setState({
      player
    })
  }

  render() {
    const {player} = this.state;
    if(!player) return <h2>Loading</h2>
    return (
      <React.Fragment>
        <img className="avatar" src={player.avatar} alt={`${player.name}'s avatar`}/>
        <h2 className="medium-header">{player.name}</h2>
        <h3 className="header">#{player.number}</h3>
        <div className="row">
          <ul className="info-list" style={{marginRight: "100px"}}>
            <li>
              Team
              <div>
                <Link to={`/teams/${player.teamId}`}>{player.teamId}</Link>
              </div>
            </li>
            <li>
              Position
              <div>{player.position}</div>
            </li>
            <li>
              PPG
              <div>{player.ppg}</div>
            </li>
          </ul>
          <ul className="info-list">
            <li>
              APG
              <div>{player.apg}</div>
            </li>
            <li>
              SPG
              <div>{player.spg}</div>
            </li>
            <li>
              RPG
              <div>{player.rpg}</div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Player