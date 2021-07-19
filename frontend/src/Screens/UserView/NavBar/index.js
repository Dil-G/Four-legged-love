import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./index.css";

function NavBar() {

  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userEmail = userData.email;
  console.log("userData")

  console.log(userData)


  const logout = async () => {
    
    console.log(userEmail);
    await axios.post("http://localhost:5000/login",{
      email: userEmail
    })
      .then(async (res) => {
        // localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        // localStorage.removeItem('role');
        history.push({
          pathname: "/",
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <nav className="navbar">
      <div className="navbar-menu has-background-dark">
        <div className="navbar-menu "></div>
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <figure className="image is-32x32 has-image-centered">
                <img className="is-rounded" src="logoo.png" />
              </figure>
            </a>
            <div className="navbar-dropdown is-right">
              <a className="navbar-item">Profile</a>
              <a className="navbar-item">{userEmail}</a>
              <hr className="navbar-divider" />
            </div>
            <div className="navbar-end">
              <a className="navbar-item">
                <button
                  className="button is-white"
                  type="button"
                  onClick={logout}
                >
                  <span>Logout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;