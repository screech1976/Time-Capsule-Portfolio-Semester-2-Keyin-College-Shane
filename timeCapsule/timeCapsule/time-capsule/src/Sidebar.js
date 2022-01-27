import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import Login from "./data/Login";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import App from "./App";

// import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <SidebarRow
          src="https://i.ibb.co/cJqzBCT/ludovic-migneault-EZ4-TYg-XPNWk-unsplash.png"
          title="Profile"
          
        />
        
        <SidebarRow   title="Explore" />

        <SidebarRow title="Setting" />
        <SidebarRow title="Notifications" />
        <button  className="btn-logout" type="log-in">
            <Link to="/">Log-out</Link>
            </button>
          
          
          <Routes>
          
          <Route path="/Login" element={<Login />} />
          </Routes>

       
      </div>
    </div>
  );
}

export default Sidebar;
