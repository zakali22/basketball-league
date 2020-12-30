import React, {Component} from "react"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import CustomLink from "./CustomLink"

const Sidebar = (props) => {
  console.log(props)
  return (
    <div className="container row two-column">
      <div className="">
        <h3 className="header">{props.title}</h3>
        <nav className="sidebar-list">
          {
            props.list.map((item) => {
              return props.type === 'player' ? (
                <CustomLink 
                key={item.name} 
                to={{
                  pathname: `${props.match.url}/${item.name.split(' ').join('-')}`,
                  state: {
                    list: props.list
                  }
                }}>{item.name}</CustomLink>
              ) : (
                <CustomLink 
                key={item} 
                to={{
                  pathname: `${props.match.url}/${item.split(' ').join('-')}`,
                  state: {
                    list: props.list
                  }
                }}>{item}</CustomLink>
              )
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