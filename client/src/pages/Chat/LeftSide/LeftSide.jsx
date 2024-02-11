import React from "react";

import "./leftSide.css";
import SideBar from "./SideBar/SideBar";
import Chats from "./Chats/Chats";

function LeftSide({ userState }) {
  return (
    <>
      <SideBar />
      <Chats userState={userState} />
    </>
  );
}

export default LeftSide;
