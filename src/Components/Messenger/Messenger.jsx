import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import style from "./Messenger.module.css";

const Messenger = () => {
  const dialogsData = [
    {
      id: 1,
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/unilite-human-vol-1/60/011_001_profile_avatar_round_user-512.png",
      name: "Bjorn Know",
    },
    {
      id: 2,
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/unilite-human-vol-1/60/011_001_profile_avatar_round_user-512.png",
      name: "Bjorn Know",
    },
    {
      id: 3,
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/unilite-human-vol-1/60/011_001_profile_avatar_round_user-512.png",
      name: "Bjorn Know",
    },
    {
      id: 4,
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/unilite-human-vol-1/60/011_001_profile_avatar_round_user-512.png",
      name: "Bjorn Know",
    },
  ];

  const messagesData = [
      {
        id: "1",
        text: "Hello there!"
      },
      {
        id: "2",
        text: "Hi!"
      },
      {
        id: "3",
        text: "What's up??"
      },
      {
        id: "4",
        text: "Nice! U?"
      },
      {
        id: "5",
        text: "I'm fine, ty."
      }
    ];

  return (
    <div className={style.messenger}>
      <Dialogs dialogsData={dialogsData} />
      <Messages messagesData={messagesData}/>
    </div>
  );
};

export default Messenger;
