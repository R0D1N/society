import React from 'react'
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" activeClassName={style.active} >Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={style.active} >Messages</NavLink>
            </div>
            <div>
                <NavLink to="/feed" activeClassName={style.active} >Feed</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={style.active} >Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={style.active} >Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav