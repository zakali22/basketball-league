import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import TeamLogo from "./TeamLogo"
import {getArticle} from "../api"
import Loading from "./Loading"


class ArticleSummary extends Component {
  state = {
    article: null,
    loading: true
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
      article: null,
      loading: true
    })

    getArticle(teamId, articleId).then(res => {
      this.setState({
        article: res
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
    const {article, loading} = this.state;
    if(loading) return <Loading />
    return (
      <div className="article" style={{width: "100%"}}>
        <h3 className="header article-title">{article.title}</h3>
        <p>{article.body}</p>        
      </div>
    )
  }
}

export default ArticleSummary