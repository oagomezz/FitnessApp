import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/log" className="nav-link">
          Fitness Log
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/exercises" className="nav-link">
          Exercises
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/history" className="nav-link">
          History
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation