import React from 'react';
import ReactDOM from 'react-dom'
// import 'font-awesome/css/font-awesome.min.css';
import "./index.css";

function NavBar(){
    return (
        <nav className="navbar">
          <div className="navbar-menu has-background-white">
            <div className="navbar-menu "></div>
            <div className="navbar-start">
              <div className="navbar-item">
                {/* <i className="fas fa-bell fa-1x has-text-light is-vcentered"></i> */}
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <figure className="image is-32x32 has-image-centered">
                   
                  </figure>
                </a>
                <div className="navbar-dropdown is-right">
                  <a className="navbar-item">Profile</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
}

export default NavBar;