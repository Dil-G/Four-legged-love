import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import NavBar from '../../common/NavBar'

function Landing(){

useEffect(()=>{
  var options = {
    method: 'GET',
    url: 'https://cafe-cookies.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': '0ef80a8648mshb4d6079d53b8f89p17c1c1jsnc97afd6c24a4',
      'x-rapidapi-host': 'cafe-cookies.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(JSON.stringify(response.data.data));
  }).catch(function (error) {
    console.error(error);
  });
},[])


    return (
      <section>
        <NavBar />
        <div className="hero hero-container">
          <div className="banner is-hidden-mobile">
            <img src="banner.png" />
            <figcaption>
              Meet Sally
            </figcaption>
          </div>
          <h1 className="title  mt-3 mb-0">Our Menu</h1>
          <hr />
          <div className="columns menu-box is-vcentered">
            <div className="column is-3">
              <div className="panel menu-items">
                <h2>Breakfast</h2>
                <img src="breakfast.jpeg"></img>
              </div>
            </div>
            <div className="column is-3">
              <div className="panel menu-items">
                <h2>Lunch</h2>
                <img src="lunch.jpeg"></img>
              </div>
            </div>
            <div className="column is-3">
              <div className="panel menu-items">
                <h2>Dinner</h2>
                <img src="dinner.jpeg"></img>
              </div>
            </div>
          </div>

          <h1 className="title  mt-3 mb-0">Meet Us</h1>
          <hr />
          <div className="panel adopt-box mx-5">
            <div className="columns p-5 ">
              <div className="column is-6">
              <button className="button is-info my-3">Adopt Me</button>

                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
              <div className="column is-6">
                <figure className="is-2">
                  <img src="dog.png" />
                </figure>
              </div>
            </div>
          </div>

          <h1 className="title  mt-3 mb-0">This week's special</h1>
          <hr />
          <div className="columns special-box is-vcentered">
            <div className="column is-3">
              <div className="panel special-items">
                <h2>Breakfast</h2>
                <img src="breakfast.jpeg"></img>
              </div>
            </div>
            <div className="column is-3">
              <div className="panel special-items">
                <h2>Lunch</h2>
                <img src="lunch.jpeg"></img>
              </div>
            </div>
            <div className="column is-3">
              <div className="panel special-items">
                <h2>Dinner</h2>
                <img src="dinner.jpeg"></img>
              </div>
            </div>
          </div>

          
         
         
        </div>
      </section>
    );

}

export default Landing;
