import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div class="content">{props.children}</div>
      <div class="extra content">
        <div class="ui two button">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
