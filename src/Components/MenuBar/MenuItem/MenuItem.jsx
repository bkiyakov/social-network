import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MenuItem.module.css';

const MenuItem = ({name, link}) => {
    return (
        <div className={style.item}>
            <NavLink to={link}>{name}</NavLink>
        </div>
    )
}

export default MenuItem;
