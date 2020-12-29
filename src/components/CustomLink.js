import React from "react"
import {Link, Route} from "react-router-dom"

const CustomLink = ({to, exact, children, key}) => {
  return (
    <Route path={to} children={({match}) => {
      return (
          <Link 
          key={key} 
          to={to}
          exact
          className={match.path.pathname === window.location.pathname && 'active'}
        >{children}</Link>
      )
    }}/>
  )
}

export default CustomLink