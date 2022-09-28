import React from "react";


const CommentDetails = () =>{
  return( 
    <div className="ui comments">
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
  )
}



export default CommentDetails;