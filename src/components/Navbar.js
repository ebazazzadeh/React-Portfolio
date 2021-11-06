import React from "react";
import logo from "../logo.png";
// Improt React FontAwesome from website https://www.npmjs.com/package/@fortawesome/react-fontawesome and
// import instruction from https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// change the hamburger bar with https://fontawesome.com/v5.15/icons/bars?style=solid HTMLUseful for copying and pasting into your HTML (Webfont with CSS or SVG with JS).<i class="fas fa-bars"></i>
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Experience</a>
            </li> */}
           
          </ul>

        </div>
      </div>
      </nav>
    )
}

export default Navbar
