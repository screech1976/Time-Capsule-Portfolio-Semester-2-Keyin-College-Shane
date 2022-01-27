import React, { useState, useRef } from "react";
import "./Post.css";

import { Avatar } from "@material-ui/core";
import Content from "./Content";

function Post() {
  const [posts, setPosts] = useState([
    {
      username: "Shane Dwyer",
      userimage:
        "https://i.ibb.co/MhnDxF6/christian-buehner-DIt-Ylc26z-VI-unsplash.png",
      text: "Rainy day on the east coast",
      shareImage:
        "https://i.ibb.co/GF7wMtq/raimond-klavins-rxm-S9-Xm-K-Y-unsplash.png",
      timestamp: Date.now(),
    },
    {
      username: "Noman Atique",
      userimage: "https://i.ibb.co/BCKNcmp/noman.jpg",
      text: "these guys on team 2 rock!",
      shareImage: "",
      timestamp: Date.now(),
    },
    {
      username: "Nick Dobbin",
      userimage:
        "https://i.ibb.co/dGhxxKm/irene-strong-v2a-Knj-Mb-P-k-unsplash.png",
      text: "On the way to town",
      shareImage:
        "https://i.ibb.co/zJ521hq/jonathan-cooper-i-Jjx-MNm-RX-k-unsplash.png",
      timestamp: Date.now(),
    },
    {
      username: "Jon Dunne",
      userimage:
        "https://i.ibb.co/cJqzBCT/ludovic-migneault-EZ4-TYg-XPNWk-unsplash.png",
      text: "On the way to town",
      shareImage:
        "https://i.ibb.co/D520NPL/elisa-ventur-bm-JAXAz6ads-unsplash.png",
      timestamp: Date.now(),
    },
  ]);

  const inputRef = useRef();
  const imageRef = useRef();

  const inputSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return alert("please fill required field");
    }
    const inputValue = inputRef.current.value;
    const imageValue = imageRef.current.value;
    const username = "Jon Dunne";
    const profilePic =
      "https://i.ibb.co/cJqzBCT/ludovic-migneault-EZ4-TYg-XPNWk-unsplash.png";
    const timestamp = Date.now();

    const post = {
      username: username,
      userimage: profilePic,
      text: inputValue,
      shareImage: imageValue,
      timestamp: timestamp,
    };

    setPosts([post, ...posts]);
    console.log(post);
  };

  return (
    <div>
      <form className="postBox" onSubmit={inputSubmit}>
        <div className="post">
          <div className="postToPageTop">
            <Avatar
              src="https://i.ibb.co/cJqzBCT/ludovic-migneault-EZ4-TYg-XPNWk-unsplash.png"
              className="postPic"
            />

            <input
              className="messageSenderInput"
              placeholder={`What's on your mind,?`}
              type="text"
              ref={inputRef}
            />
            <input
              className="messageSenderInput"
              placeholder={"Image URL (Optional)"}
              ref={imageRef}
            />
            <button className="postButton" type="submit">
              Post!
            </button>
          </div>
        </div>
      </form>
      <div>
        {posts.map((post) => (
          <Content
            username={post.username}
            userimage={post.userimage}
            text={post.text}
            shareImage={post.shareImage}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default Post;
