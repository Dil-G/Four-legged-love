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
          <span>info@FLL.lk</span><br />
          <span>21, Reird Avenue,</span><br />
          <span>Colombo 7</span><br />
          <span>0112548557</span>
        </div>
        <div className="column is-4">
          <h1>Welcome to The Four Legged Love!</h1>
          <ul>
            <li>
            My Account
            </li>
            <li>
            My Orders
            </li>
            <li>
            Terms Of Use
            </li>
            <li>
            Privacy Policy
            </li>
            <li>
            FAQs
            </li>
          </ul>
        </div>
        <div className="column is-4">
          <h1>About us</h1>
          <ul>
            <li>
            Our services
            </li>
            <li>
            Join us
            </li>
            <li>
            Our products
            </li>
            </ul>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
}

export default Footer;
