import React from "react";
import { Link, useLocation } from "react-router-dom";


function NavTabs() {
  
  const location = useLocation();

  return (
  
    <div class="navbar navbar-expand-lg navbar-light bg-light">
     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Andy Ives </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home </Link>
        </li>
        <li class="nav-item">
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
        </li>
        
      </ul>
    </div>
  </div>
  );
}


export default NavTabs;
