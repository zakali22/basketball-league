import React, {Component} from "react"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import CustomLink from "./CustomLink"

const Sidebar = (props) => {

  const renderLinks = (item) => {
    switch(props.type){
      case 'player':
        return (
          <CustomLink 
            key={item.name} 
            to={{
              pathname: `${props.match.url}/${item.name.split(' ').join('-')}`,
              state: {
                list: props.list
              }
            }}>{item.name}</CustomLink>
        )
      break;
      case 'teams':
        return (
          <CustomLink 
            key={item} 
            to={{
              pathname: `${props.match.url}/${item.split(' ').join('-')}`,
              state: {
                list: props.list
              }
            }}>{item}</CustomLink>
        )
      break;
      case 'articles': 
        return (
          <CustomLink 
            key={item.id} 
            to={{
              pathname: `${props.match.url}/${item.id}`,
              state: {
                list: props.list
              }
            }}>{item.title}</CustomLink>
        )
      default: 
        return 
    }
  }

  return (
    <div className="container row two-column">
      <div className="">
        <h3 className="header">{props.title}</h3>
        <nav className="sidebar-list">
          {
            props.list.map((item) => {
              return renderLinks(item)
            })
          }
        </nav>
      </div>
      <div className="panel">
          {props.children}
      </div>
    </div>
  )
}

export default withRouter(Sidebar)