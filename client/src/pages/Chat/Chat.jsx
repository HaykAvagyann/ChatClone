import React, { useEffect, useState } from "react";

import "./chat.css";
import LeftSide from "./LeftSide/LeftSide";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/usersData/usersDataSlice";
import ChoosenChat from "./RightSide/ChoosenChat";


function Chat() {
  const userState = useSelector(selectUsersData);

  return (
    <div className='chatcontainer'>
      <LeftSide userState={userState} />
      <ChoosenChat userState={userState} />
    </div>
  );
}

export default Chat;
