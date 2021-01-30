import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import style from './MenuBar.module.css';

const MenuBar = () => {
    return (
        <div className={style.menuBar}>
            <MenuItem name="Profile" link="/profile"/>
            <MenuItem name="News" link="/news"/>
            <MenuItem name="Messenger" link="/messenger"/>
            <MenuItem name="Friends" link="/friends"/>
            <MenuItem name="Settings" link="/settings"/>
        </div>
    );
}

export default MenuBar;