import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
// import 'font-awesome/css/font-awesome.min.css';
import "./index.css";

function NavBar(){
    return (
        <nav className="navbar">
          <div className="navbar-menu has-background-white has-text-black">
            <div className="navbar-menu ">
                <img src='logoo.png'></img>
            </div>
            <div className="navbar-start">
              <div className="navbar-item" >
                <Link to="#" ><h4>About us</h4>
                </Link>
              </div>
              <div className="navbar-item">
              <Link to="#">
                <h4>Menu</h4>
                </Link>
              </div>
              {/* <div className="navbar-item">
              <Link to="#">
                <h4>Adopt</h4>
                </Link>
              </div> */}
              <div className="navbar-end">
              <span className="navbar-item">
                <Link to="../signup">
                  <a className="button  is-info">
                    <span>Join our community</span>
                  </a>
                </Link>
              </span>
              <span className="navbar-item">
                <Link to="../login">
                  <a className="button is-info">
                    <span>Login </span>
                  </a>
                </Link>
              </span>
            </div>

            </div>
          </div>
        </nav>
    );
}

export default NavBar;