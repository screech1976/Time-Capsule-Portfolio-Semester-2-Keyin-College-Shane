import { useState } from 'react'
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Login from './Login';

export default function Registraion() {
  
 

  class User { // This creates a user
  
    
    constructor(n, p) {
      this.username = n;
      this.userpassword = p;
    
    }
      
    
     };
  
  class Store { // this stores the user on the local storage by checking to see if there is no users if there is no users it creates a new list, if there is a previous 
    // it pulls the old list using static getusers and then uses static adduser to add the newely created user name and user password
    static getUsers() {
      var Users;
      if (localStorage.getItem("Users") === null) {
        Users = [];
      } else {
        Users = JSON.parse(localStorage.getItem("Users"));
      }
      return Users;
    };
  
    
  
    static addUser(User) {
      var Users = Store.getUsers();
  
      Users.push(User);
  
      localStorage.setItem("Users", JSON.stringify(Users));
    };
  };


    
  
    const [name, setName] = useState('');   //This sets the username and password
    const [password, setPassword] = useState('');
    
   
    const [submitted, setSubmitted] = useState(false); // this works with handle name, handle password and handle sumbit to set the username & password
    const [error, setError] = useState(false);
    
    
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
    

    
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
    
   
    const handleSubmit = (e) => {
      var username = name
      var userpassword = password
      var user = new User(username, userpassword) // this adds this to the class User to create a new user to add to list using the store class
      e.preventDefault();
      if (name === '' ||  password === '') {
        setError(true);
      } else {
        setSubmitted(true);
        setError(false);
        Store.addUser(user);
        
        
        
      }
    };
    
    

    
    
    const successMessage = () => { // this displays a success message if the name is correctly submitted
      return (
        
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          
          <h1>Your account: {name} has been successfully registered</h1>
        
          <h4><button  className="btn" type="log-in">
            <Link to="/">Login</Link>
            </button>
          </h4>
          
          <Routes>
          
          <Route path="/Login" element={<Login />} />
          </Routes>
        </div> 
      );
      
    };
    

    const errorMessage = () => { // this displays if the fields are empty
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',

          }}>
          <h1>Please enter all the fields</h1>
          
        </div>
        
      );
      
    };
    
        
  
    return (
      // this section is the built form to handle the information that the user passes to create a new account
      <div className="form">  
        <div>
          <h1>User Registration</h1>
        </div>
    
       
        <div className="messages">
          {errorMessage()}
          {successMessage()}
          
        </div>
    
        <form>
          
          <label className="label">Name</label>
          <input onChange={handleName} className="input" 
            value={name} placeholder='User' type="text" />
    
          
    
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input" 
            value={password} placeholder='Password' type="password" />
    
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>

          <h4>Already have an account?</h4>
          <button  className="btn" type="log-in">
            <Link to="/">Login</Link>
            </button>
          
          
          <Routes>
          
          <Route path="/Login" element={<Login />} />
          </Routes>

        </form>
        
        
      </div>
    );
    
  }
  