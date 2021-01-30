import React from "react";
import { NavLink } from "react-router-dom";
import style from './Dialog.module.css';

const Dialog = ({ id, imgSrc, name }) => {
  const path = "/messenger/dialog/" + id;

  return (
    <NavLink className={style.dialog} to={path}>
      <img
        src={imgSrc}
        alt={"profile_logo_" + id}
      />
      <span>{name}</span>
    </NavLink>
  );
};

export default Dialog;