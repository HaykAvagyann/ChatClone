import React from "react";

import "./myMessege.css";

function MyMessege({ messageClass, messageReceived }) {
  return (
    <div className={messageClass}>
      <div className='theMessege'>{messageReceived}</div>
    </div>
  );
}

export default MyMessege;
