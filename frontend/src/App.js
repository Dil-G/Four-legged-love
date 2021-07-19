import React, { useState, useEffect } from "react";
import Login from "./Screens/LoginPage";
import Landing from "./Screens/LandingPage";
import Signup from "./Screens/SignupPage";
// import Footer from "./common/Footer";
import User from "./Screens/UserView";
 
// import { GuardProvider, GuardedRoute } from "react-router-guards";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  

    // const [isAuthed, setIsAuthed]  = useState(() => {
    //   const token = localStorage.getItem("authToken");
    //   if(token !== null){return true}else{return false}
    // });;
  
    // useEffect(async() => {
    //   console.log("appjs" + localStorage.getItem('authToken'));
    //   if (await localStorage.getItem('authToken') !== null) {
    //     setIsAuthed(true);
    //   } else {
    //     setIsAuthed(false);
    //   }
    // });

    return (
      <div className="app">
        { <Router>
          {/* <GuardProvider> */} 
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Landing} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/user" exact component={User} />
          {/* { </GuardProvider> */}
        </Router> }
      </div>
    );

}

export default App;
