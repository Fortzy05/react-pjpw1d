import React from 'react';

const CommentDetails = (props) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <div>
          <a href="/" className="avatar">
            <img src="" alt="avatar" />
          </a>
        </div>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.post}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
