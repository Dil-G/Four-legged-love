import React, { useState, useEffect } from "react";
import "./index.css";
import NavBar from '../../common/NavBar'

function Landing(){

    return (
      <section>
        <NavBar />
        <div className="hero hero-container">
          <div className="banner">
            <img src="banner.png"></img>
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
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="tile ">
                <div className="box">
                  <a href="movie.html">
                    <figure className="image is-128x128">
                      <img src="images/91WNnQZdybL._AC_SL1500_.jpg" />
                    </figure>
                  </a>
                </div>

                <h2 className="title is-3">Title 1</h2>
              </div>
            </div>
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128 is-inline-block">
                      <img src="images/avengers-endgame-original-movie-poster-15x21-in-2019-anthony-russo-robert-downey-jr.jpg" />
                    </figure>
                  </a>
                </div>
                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128">
                      <img src="images/parasite-film-tribute-1.jpg" />
                    </figure>
                  </a>
                </div>
                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
            </div>
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128">
                      <img src="images/unnamed (5).jpg" />
                    </figure>
                  </a>
                </div>
                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
            </div>
          </div>

          <h1 className="title is-3">Reccomendations</h1>
          <hr />

          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128">
                      <img src="images/91WNnQZdybL._AC_SL1500_.jpg" />
                    </figure>
                  </a>
                </div>

                <br />
                <h2 className="title is-3">Title 1</h2>
              </div>
            </div>
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128 is-inline-block">
                      <img src="images/avengers-endgame-original-movie-poster-15x21-in-2019-anthony-russo-robert-downey-jr.jpg" />
                    </figure>
                  </a>
                </div>
                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128">
                      <img src="images/parasite-film-tribute-1.jpg" />
                    </figure>
                  </a>
                </div>
                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
            </div>
            <div className="column is-half">
              <div className="tile">
                <div className="box">
                  <a>
                    <figure className="image is-128x128">
                      <img src="images/unnamed (5).jpg" />
                    </figure>
                  </a>
                </div>
                <p>
                  Hello World Second level Curabitur accumsan turpis pharetra
                  augue tincidunt blandit. Quisque condimentum maximus mi, sit
                  amet commodo arcu rutrum id. Proin pretium urna vel cursus
                  venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Landing;
