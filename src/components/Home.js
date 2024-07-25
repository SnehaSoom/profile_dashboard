// src/Home.js
import React, { useState } from "react";
import "./Home.css";
import Theresa_Webb from "../assets/images/Theresa_Webb.svg";
import Marvin_McKinney from "../assets/images/Marvin_McKinney.svg";
import Chat_Bubble from "../assets/images/Chat_Bubble.svg";
import Register from './Register';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postText, setPostText] = useState("");

  const handlePostClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="home">
      <h1>Hello Jane</h1>
      <p>
        How are you doing today? Would you like to share something with the
        community?{" "}
        <span role="img" aria-label="emoji">
          🤗
        </span>
      </p>

      <div className="post">
        <div className="post-header">
          <h4>Create post</h4>
        </div>
        <div className="post-context">
          <div className="input-wrapper">
            <span role="img" aria-label="emoji">
              💬
            </span>
            <input
              type="text"
              placeholder="How are you feeling today?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
        </div>
        <div className="post-button">
          <button onClick={handlePostClick}>Post</button>
        </div>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseClick}>
              &times;
            </button>
            <Register isModal={true} handleClose={()=> setIsOpen(false)}/>
          </div>
        </div>
      )}

      <div className="post">
        <div className="post-header">
          <img src={Theresa_Webb} alt="Theresa Webb" className="avatar" />
          <div className="post-info">
            <h2>Theresa Webb</h2>
            <span>5 mins ago</span>
          </div>
        </div>
        <div className="post-context">
          <span className="input-icon" role="img" aria-label="emoji">
            👏
          </span>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="post-footer">
          <img src={Chat_Bubble} alt="Chat_Bubble" />
          <span>24 comments</span>
        </div>
      </div>

      <div className="post">
        <div className="post-header">
          <img src={Marvin_McKinney} alt="Marvin McKinney" className="avatar" />
          <div className="post-info">
            <h2>Marvin McKinney</h2>
            <span>8 mins ago · Edited</span>
          </div>
        </div>
        <div className="post-context">
          <span className="input-icon" role="img" aria-label="emoji">
            👏
          </span>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="post-footer">
          <img src={Chat_Bubble} alt="Chat_Bubble" />
          <span>24 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
