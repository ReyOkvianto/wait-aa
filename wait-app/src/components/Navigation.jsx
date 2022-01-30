import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {

  return (
    // <div className="navigation">
    //   <nav className="navbar navbar-expand navbar-dark bg-dark">
    //     <div className="container">
    //       <NavLink className="navbar-brand" to="/">
    //         wait.
    //       </NavLink>
    //     </div>
    //   </nav>
    // </div>

    <div className="title-bar">
      {/* <a href="https://youtube.com"><div class="logo">
        wait.
      </div></a> */}
      <div class="logo">
        <a href="https://youtube.com" className="gradient-text">
          wait.
        </a>
      </div>
    </div>
  );
}

export default Navigation;
