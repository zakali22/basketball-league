import React, {Component} from "react"

class Loading extends Component {
  state = {
    loading: 'Loading'
  }
  
  componentDidMount(){
    this.timer = window.setInterval(() => {
      if(this.state.loading === `${this.state.loading}...`){
        this.setState({
          loading: 'Loading'
        })
      } else {
        this.setState((state) => ({
          loading: state.loading + '.'
        }))
      }
    }, 500)
  }

  componentWillUnmount(){
    window.clearInterval(this.timer)
  }

  render(){
    return (
      <h4 className="text-center">{this.state.loading}</h4>
    )
  }
}

export default Loading