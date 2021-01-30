import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <img src="./logo.svg" alt="logo" className={style.logo}/>
        </div>
    );
}

export default Header;