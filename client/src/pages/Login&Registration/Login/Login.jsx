import React, { useEffect } from "react";

import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUsersData } from "../../../store/slices/usersData/usersDataSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const userState = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(selectUsersData);

  useEffect(() => {
    if (currentUser?.id) {
      navigate("/Chat");
    }
  }, [currentUser?.id]);

  const handlerLogin = (e) => {
    e.preventDefault();

    const {
      username: { value: username },
      password: { value: password },
    } = e.target;

    const user = { username, password };
    dispatch(login(user));
  };
  return (
    <form
      action='#'
      className='sign-in-form'
      onSubmit={handlerLogin}>
      <h2 className='title'>Sign in</h2>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input
          type='text'
          placeholder='Username'
          name='username'
        />
      </div>
      <div className='input-field'>
        <i className='fas fa-lock'></i>
        <input
          type='password'
          placeholder='Password'
          name='password'
        />
      </div>
      <input
        type='submit'
        value='Login'
        className='btn solid'
      />
      <p className='social-text'>Or Sign in with social platforms</p>
      <div className='social-media'>
        <a
          href='#'
          className='social-icon'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a
          href='#'
          className='social-icon'>
          <i className='fab fa-twitter'></i>
        </a>
        <a
          href='#'
          className='social-icon'>
          <i className='fab fa-google'></i>
        </a>
        <a
          href='#'
          className='social-icon'>
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
    </form>
  );
}

export default Login;
