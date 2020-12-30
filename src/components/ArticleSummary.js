import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import TeamLogo from "./TeamLogo"
import {getArticle} from "../api"

class ArticleSummary extends Component {
  state = {
    article: null
  }

  componentDidMount(){
    this.updateArticle()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.articleId !== this.props.match.params.articleId){
      this.updateArticle()
    }
  }

  updateArticle = () => {
    let {teamId, articleId} = this.props.match.params
    this.setState({
      article: null
    })

    getArticle(teamId, articleId).then(res => {
      this.setState({
        article: res
      })
    })

  }

  render() {
    const {article} = this.state;
    if(!article) return <h2>Loading</h2>
    return (
      <div className="article" style={{width: "100%"}}>
        <h3 className="header article-title">{article.title}</h3>
        <p>{article.body}</p>        
      </div>
    )
  }
}

export default ArticleSummary