import React from "react";

function Footer({ sendMessage, message, setMessage }) {
  return (
    <div className='footer'>
      <form
        action=''
        onSubmit={sendMessage}>
        <input
          type='text'
          placeholder='Aa'
          id='message-input'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Footer;
