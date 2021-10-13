import React from 'react';
import s from './Header.module.css'


function Header() {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png"
                alt=""/>
        </header>
    )
}


export default Header
