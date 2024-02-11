import React from "react";

function Header({ userData }) {
  return (
    <div className='header'>
      <div className='about'>
        <div className='personImg'>
          <img
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt=''
            width={"50px"}
          />
        </div>
        <div className='nameText'>
          <div className='userName'>{userData.username}</div>
          <div className='text'>active</div>
        </div>
      </div>
      <ul className='callNav'>
        <li>
          <i className='fa-solid fa-phone'></i>
        </li>
        <li>
          <i className='fa-solid fa-video'></i>
        </li>
      </ul>
    </div>
  );
}

export default Header;
