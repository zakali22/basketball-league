import React, { Component } from 'react'
import PropTypes from "prop-types"

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
    let player = this.props.location.state.players.find(player => player.name.split(' ').join('-') === playerId)

    console.log(playerId)
    console.log(this.props.location.state.players)
    console.log(player)

    this.setState({
      player
    }, () => {
      console.log(this.state.player)
    })
  }

  render() {
    if(!this.state.player) return <h2>Loading</h2>
    return (
      <div>
        <h1>{this.state.player.name}</h1>
      </div>
    )
  }
}

Player.propTypes = {
  players: PropTypes.array.isRequired
}

export default Player