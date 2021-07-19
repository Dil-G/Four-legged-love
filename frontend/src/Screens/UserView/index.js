import React from "react";
import { Switch } from "react-router";
import { Redirect, Route, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import "./index.css";


function UserView() {
  //get the subpath of the URL
  //Eg: /dashboard/proctors => Subpath will be 'proctors'

  const userData = JSON.parse(localStorage.getItem('userData'));

  // const userEmail = userData.email;


  console.log(userData);
  if (userData == null) {
    return <Redirect to="/login" />;
  }


  return (
    <section>
      <NavBar />

      <div className="main-view">
        <Switch>
          <Route exact path="/user" component={Dashboard} />
        </Switch>
      </div>
    </section>
  );



}

export default UserView;