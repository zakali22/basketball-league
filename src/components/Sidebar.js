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
            props.list.map(({name}) => (
              <CustomLink 
                key={name} 
                to={{
                  pathname: `${props.match.url}/${name.split(' ').join('-')}`,
                  state: {
                    players: props.list
                  }
                }}>{name}</CustomLink>
            ))
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