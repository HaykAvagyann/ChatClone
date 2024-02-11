import React, { useState } from "react";

import "./sideBar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../../../store/slices/usersData/API";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const handlerUser = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='sidebar'>
      <ul className='sidbar-Ul'>
        <li className='item'>
          <i className='fa-solid fa-message'></i>
        </li>
        <li className='item'>
          <i className='fa-solid fa-users'></i>
        </li>
      </ul>
      <div
        className={`personImg`}
        onClick={() => handlerUser()}>
        <img
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
          alt=''
          width={"42px"}
        />
        <div className={`nav ${isActive ? "acitve" : ""}`}>
          <ul className='personNav'>
            <li>
              <i className='fa-solid fa-user'></i>About
            </li>
            <li onClick={() => dispatch(logOutUser())}>
              <i className='fa-solid fa-right-from-bracket'></i>Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
