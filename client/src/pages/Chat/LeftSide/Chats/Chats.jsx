import React from "react";

import "./chats.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../../../store/slices/usersData/usersDataSlice";

function Chats({ userState }) {
  const { currentUser } = useSelector(selectUsersData);
  const navigate = useNavigate();
  const handlerChatClick = (userID) => {
    navigate(`/ChoosenChat/${userID}`);
  };

  const filteredUsers = userState.usersData.filter((user) => user.id !== currentUser.id);

  return (
    <div className='chatsContainer'>
      <h1 className='chats-title'>Chats</h1>
      <div className='search'>
        <form>
          <input
            type='text'
            placeholder='Search Messanger'
            className='SearchInput'
          />
        </form>
      </div>

      <div className='chats'>
        {filteredUsers.map((user) => {
          return (
            <div
              className='chat'
              key={user.id}
              onClick={() => handlerChatClick(user.id)}>
              <div className='about'>
                <div className='personImage'>
                  <img
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
                    alt=''
                    width={"50px"}
                  />
                </div>
                <div className='nameText'>
                  <div className='userName'>{user.username}</div>
                  <div className='text'>privet</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chats;
