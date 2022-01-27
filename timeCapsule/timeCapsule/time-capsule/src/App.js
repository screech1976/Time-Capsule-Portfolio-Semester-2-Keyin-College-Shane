import React from "react";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Login from "./data/Login";

import Registraion from "./data/Registraion";
import { Route, Routes, BrowserRouter as Router,} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
    <Header />

      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registraion />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  </Router>
  
);
}


export default App;
