import React from "react";
import "./Feed.css";
import "./Sidebar.css";
import "./Header.css"
import Post from "./Post";
import Sidebar from "./Sidebar";
import SidebarRow from "./SidebarRow";
import Header from "./Header";

import "./SidebarRow.css";


function Feed() {
  
  return (
    <div className="feed">
      
      <Post />
      <Sidebar />
      <SidebarRow />
      

    </div>
  );
}

export default Feed;
