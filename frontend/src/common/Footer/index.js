import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./index.css";


function Footer() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

 

  return (
    <section className=" is-fullheight hero-footer">
      {/* <div className="container"> */}
      <div className="columns footer is-vcentered">
        <div className="column is-4">
        <h1>Connect with us</h1>
        </div>
        <div className="column is-4">
        <h1>Welcome to The Four Legged Love!</h1>
        </div>
        <div className="column is-4">
          <h1>About us</h1>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
}

export default Footer;
