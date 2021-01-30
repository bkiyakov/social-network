import React from "react";
import Dialog from "./Dialog/Dialog";
import style from './Dialogs.module.css';

const Dialogs = ({dialogsData}) => {
  return (
    <div className={style.dialogs}>
        {dialogsData.map(dialogData => 
            <Dialog
            key={dialogData.id}
            id={dialogData.id}
            imgSrc={dialogData.imgSrc}
            name={dialogData.name}
          />
        )}
    </div>
  );
};

export default Dialogs;
