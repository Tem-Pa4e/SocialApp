import React from 'react';
import s from './Navbar.module.css'


function Navbar() {
    return (
        <nav className={s.nav}>
            <div >
            <div className={s.item}>
                Profile
            </div>
            <div className={s.item}>
                Message
            </div>
            <div className={s.item}>
                News
            </div>
            <div className={s.item}>
                Music
            </div>
            <div className={s.item}>
                Settings
            </div>
            </div>
        </nav>
    )
}


export default Navbar
