import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../../../store/slices/usersData/usersDataSlice";
import { addNewUser } from "../../../store/slices/usersData/API";
import { useNavigate } from "react-router-dom";

function Registration() {
  const userState = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
      confirmpassword: { value: confirmpassword },
    } = e.target;
    let newUser = {
      id: new Date().getTime(),
      username,
      email,
      password,
      confirmpassword,
    };
    if (userState.usersData.find((user) => user.username === username) || confirmpassword !== password) return alert("try another username");
    dispatch(addNewUser(newUser));
    navigate("/Chat");
  };
  return (
    <form
      action='#'
      className='sign-up-form'
      onSubmit={handlerSubmit}>
      <h2 className='title'>Sign up</h2>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input
          type='text'
          placeholder='Username'
          name='username'
        />
      </div>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
        <input
          type='email'
          placeholder='Email'
          name='email'
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
      <div className='input-field'>
        <i className='fas fa-lock'></i>
        <input
          type='password'
          placeholder='Confirm Password'
          name='confirmpassword'
        />
      </div>
      <input
        type='submit'
        className='btn'
        value='Sign up'
      />
      <p className='social-text'>Or Sign up with social platforms</p>
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

export default Registration;
