import { Avatar } from "@material-ui/core";
import React from "react";
import "./Content.css";

function Content({ shareImage, userimage, username, timestamp, text }) {
  return (
    <div className="content">
      <div className="content_top">
        <Avatar src={userimage} className="postPic" />
        <div className="content_info">
          <h3>{username}</h3>
          <p>{Date(timestamp)}</p>
        </div>
      </div>

      <div className="content_bottom">
        <p>{text}</p>
      </div>
      <div className="content_image">
        <img src={shareImage} alt="" />
      </div>
      <div className="content_options">
        <div className="content_option">
          <button className="postButt">Love it</button>
        </div>
        <div>
          <hr className="vertically" />
        </div>
        <div className="content_option">
          <button className="hateButton">Hate</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
