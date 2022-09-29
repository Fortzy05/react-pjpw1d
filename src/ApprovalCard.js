import React from 'react';

const ApprovalCard = () => {
  return (
    <div className="ui cards">
      <div className="card">
        <div class="content">Are you sure?</div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui two button">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Reject</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
