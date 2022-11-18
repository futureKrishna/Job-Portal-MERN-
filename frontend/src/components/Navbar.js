import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">Naukari</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="about">About</NavLink>
      </li>

      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Register
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/EMPregister">Employer</NavLink>
          <NavLink className="dropdown-item" to="/JSregister">Job Seeker</NavLink>
        </div>
      </li>

      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/EMPLogin">Employer</NavLink>
          <NavLink className="dropdown-item" to="/JSLogin">Job Seeker</NavLink>
        </div>
      </li>

    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
