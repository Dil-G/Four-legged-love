import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./index.css";


function Signup() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const signup = async () => {

    if (password == confirmPassword) {
      if (name !== "" || email !== "" || password !== "" || confirmPassword !== "" || username !== "") {
        console.log(name + username + email + password + confirmPassword )


        const signupData = {
          email: email,
          password: password,
          name: name,
          username: username,
        }
        console.log(signupData)
        await axios.post("http://localhost:5000/signup", signupData)
          .then(async (res) => {
            console.log(res.data)
            history.push({
              pathname: '/login',
            })

          })
          .catch(error => {
            console.log(error)
          })
      }
    }
    else {
      console.log("Passwords don't match");
    }
  }

  return (
    <section className="hero is-fullheight hero-grey">
      <div className="hero-body register-hero">
        <div className="container">
          
          <div className="columns is-centered">
            
            <div className="column is-5-tablet is--desktop is-7-widescreen">
              
              <form className="box p-5">
              Four legged love is a community to raise awareness and encourage adoption
<br/>Join us!
                <h1 className="title is-3 mt-3 text-color topline1 has-text-left">
                  Sign up
                </h1>

                <div className="field ">
                  <label className="label">
                    User Name
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      placeholder="eg : Bob"
                      className="input"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>


                <div className="field ">
                  <label className="label">
                    User Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      placeholder="e.g. bob@gmail.com"
                      className="input"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field ">
                  <label className="label">
                    Full name
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      placeholder="e.g. ABC Company"
                      className="input"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

               

                <div className="field">
                  <label className="label">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="password"
                      placeholder="*******"
                      className="input"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">
                    Confirm Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="password"
                      placeholder="*******"
                      className="input"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field has-text-centered">
                  <button className="button mr-3 primary-color-bg has-text-black is-outlined" onClick={signup} type="button">
                    <span className="icon">
                      <i className="fa fa-sign-in-alt is-white"></i>
                    </span>
                    <span>Sign up</span>
                  </button>
                  <Link to="/">
                    <button className="button is-danger has-text-white">
                      <span>Cancel</span>
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
