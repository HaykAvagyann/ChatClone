import React, { useEffect, useState } from "react";
import "./choosenTour.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MyMessege from "../../../components/MyMessege/MyMessege";
import { useParams } from "react-router-dom";
import { UseRequest } from "../../../hooks/UseRequest";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

function ChoosenChat({ userStatem, isMyMessage, text }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

const sendMessage = (e) => {
  e.preventDefault();
  if (message.trim() !== "") {
    socket.emit("send_message", { message });
  }
  setMessage("");
};

  useEffect(() => {
    socket.on("load_messages", (data) => {
      setMessages(data);
    });

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });
  }, [socket]);

  const { id } = useParams();
  const { get } = UseRequest();

  const [userData, setUsersData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await get(`http://localhost:5000/usersData/${id}`);
        setUsersData(result);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [id]);

  const messageClass = isMyMessage ? "my-message" : "your-message";

  return (
    <div className='rightSide'>
      <div className='section-inner'>
        {userData?.id ? (
          <>
            <Header userData={userData} />
            <div
              className={`message-container`}
              id='send-container'>
              {messages.map((receivedMessage, index) => (
                <MyMessege
                  key={index}
                  text={text}
                  messageClass={messageClass}
                  userData={userData}
                  messageReceived={receivedMessage}
                />
              ))}
            </div>
            <Footer
              message={message}
              setMessage={setMessage}
              socket={socket}
              sendMessage={sendMessage}
            />
          </>
        ) : (
          <h3 className='notMessege'>Not Messege</h3>
        )}
      </div>
    </div>
  );
}

export default ChoosenChat;
