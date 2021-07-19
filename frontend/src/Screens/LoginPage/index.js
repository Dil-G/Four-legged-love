// import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";
// import { useSnackbar } from "notistack";
// import { useHistory } from "react-router-dom";

function Login() {

//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
//   const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

 
  return (
    <section className="hero is-fullheight hero-grey">
      <div className="hero-body login-hero">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10-tablet  is-7-widescreen">
              <form className="box box-login" onSubmit={(e) => e.preventDefault()}>
                  <div className="columns ">
                      <div className="column img-container is-2-tablet  is-5 is-hidden-mobile">
                          <img className="image" src='logo.png'></img>
                      </div>
                      <div className="column login-form has-background-white px-6 py-5 is-7">
                <h1 className="title is-3 text-color topline1 has-text-left">
                  Four Legged Love
                </h1>

                {error && (
                  <p className="error-block">
                    Username or password is incorrect!
                  </p>
                )}
                <div className="field mt-5">
                  <label htmlFor="" className="label">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      className="input"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
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
                <div className="field has-text-centered">
                  <button
                    className="button mr-3 has-background-white has-text-black is-otlined"
                    onClick={login}
                  >
                   
                    <span>Login</span>
                  </button>
                  <Link to="/">
                    <button className="button is-danger has-text-white">
                      <span>Cancel</span>
                    </button>
                  </Link>
                </div>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}

export default Login;
