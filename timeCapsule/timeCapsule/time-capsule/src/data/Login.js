import React from "react";
import { useState } from "react";
import Feed from "../Feed";
import ReactDOM from "react-dom";

import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Registraion from "./Registraion";

export default function Login() {
  // class validate {
  //     static getUsers() {
  //         var Users;
  //         if (localStorage.getItem("Users") === null) {
  //           Users = [];
  //         } else {
  //           Users = JSON.parse(localStorage.getItem("Users"));
  //         }
  //         return Users;
  //       };

  // static validation = () => {
  //     if (Users.type === user.type || Users.type === user.type){
  //         return
  //     }

  // }

  // }

  <Routes>
    <Route path="/Feed" element={<Feed />} />
    <Route path="/Registration" element={<Registraion />} />
  </Routes>;


  const [name, setName] = useState(""); //This sets the username and password
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false); // this works with handle name, handle password and handle sumbit to set the username & password
  const [error, setError] = useState(false);
  const [loginerror, setloginError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };



  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  
  
      
  

  const handleSubmit = (e) => {
  
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      let Users = JSON.parse(localStorage.getItem("Users"));
      if( 
        Username = Users.find(Users => Users.username === name && Users.userpassword === password))
        {var Username} 
        else var Username = false
  
       if (
        name === Username.username &&
        password === Username.userpassword
      ) {
        var loginstatus = true; // "loggedin";
      } else {
        loginstatus = false; //"loggedout";
      }

      if (loginstatus === true) {
        setSubmitted(true);
        setloginError(false);
      } else {
        setloginError(true);
      }
    }
  };

  const successMessage = () => {
    // this displays a success message if the name is correctly submitted
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Your account: {name} has been successfully Logged in</h1>

        <h4>
          <button className="btn" type="log-in">
            <Link to="/Feed">Feed</Link>
          </button>
        </h4>
      </div>
    );
  };

  const errorMessage = () => {
    // this displays if the fields are empty
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const loginerrorMessage = () => {
    // this displays if the fields are empty
    return (
      <div
        className="error"
        style={{
          display: loginerror ? "" : "none",
        }}
      >
        <h1>incorrect log-in</h1>
      </div>
    );
  };

  return (
    // this section is the built form to handle the information that the user passes to create a new account
    <div className="form">
      <div>
        <h1>User Login</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
        {loginerrorMessage()}
      </div>

      <form>
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          placeholder="User"
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          placeholder="Password"
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Log-in
        </button>
        
        <h4><button  className="btn" type="log-in">
            <Link to="/Registration">Register</Link>
            </button>
          </h4>
          
          <Routes>
          
          <Route path="/Registraion" element={<Registraion />} />
          </Routes>


      </form>
    </div>
  );
}
