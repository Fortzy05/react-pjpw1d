import React from "react";
import faker from "faker";
import "./style.css";

export default function App() {
  return (
    <div className="ui container comment">
      <div className="comment">
        <div>
        <a href="/" className="avatar">
          <img src="" alt="avatar"/>
        </a>
        </div>
        <div className="content">
          <a href='/' className="author">Sam</a>
          <div className="metadata">
          <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">This is a nice post</div>
        </div>
      </div>
      
    </div>
  );
}
