import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header(){
  let navigate = useNavigate()

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"> HMS</Link>
        <div>
          <button className="btn btn-outline-info" onClick={() => {navigate("/login")}}>Login</button>
          <button className="btn btn-outline-success mx-2" onClick={() => {navigate("/signup")}}>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
