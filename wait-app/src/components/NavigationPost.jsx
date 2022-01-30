import React from "react";
import { NavLink } from "react-router-dom";
import Location from "./Post.jsx"
 
//Location = "DFW"

function NavigationPost() {
  return (
    // <div className="navigation">
    //   <nav className="navbar navbar-expand navbar-dark bg-dark">
    //     <div className="container">
    //       <NavLink className="navbar-brand" to="/">
    //         Wait App
    //       </NavLink>
    //       <div>
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/Post">
    //               Post
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div className="title-bar">
      {/* <a href="https://youtube.com"><div class="logo">
        wait.
      </div></a> */}
      <div class="logo">
        <a href="/" className="gradient-text">
          wait.
        </a>
      </div>
    </div>
  );
}

export default NavigationPost;
