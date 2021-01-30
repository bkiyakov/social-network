import React from "react";
import Message from './Message/Message'
import style from './Messages.module.css';

const Messages = ({messagesData}) => {
  return (
    <div className={style.messages}>
        {messagesData.map(messageData => 
          <Message
            key={messageData.id}
            id={messageData.id}
            text={messageData.text} />
        )}
    </div>
  );
};

export default Messages;