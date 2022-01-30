import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Wait App
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
