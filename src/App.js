import React from 'react';
import CommentDetails from './CommentDetails';
import './style.css';
import ApprovalCard from './ApprovalCard';

export default function App() {
  return (
    <div className="ui container">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 6:00pm"
          post="Nice blog post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Nosa"
          timeAgo="Today at 7:00am"
          post="Glad to be a part of this"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Cynthia"
          timeAgo="Yesterday at 5:00pm"
          post="Today is a great day"
        />
      </ApprovalCard>
    </div>
  );
}
