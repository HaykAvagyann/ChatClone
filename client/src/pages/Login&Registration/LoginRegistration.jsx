import React, { useState } from "react";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";

function LoginRegistration() {
  const [isSignUpActive, setSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setSignUpActive(!isSignUpActive);
  };

  return (
    <div className={`container ${isSignUpActive ? "sign-up-mode" : ""}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <Login />
          <Registration />
        </div>
      </div>

      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button
              className='btn transparent'
              onClick={() => handleSignUpClick(true)}>
              Sign up
            </button>
          </div>
          <img
            src='img/log.svg'
            className='image'
            alt=''
          />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button
              className='btn transparent'
              id='sign-in-btn'
              onClick={() => handleSignUpClick(false)}>
              Sign in
            </button>
          </div>
          <img
            src='img/register.svg'
            className='image'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
