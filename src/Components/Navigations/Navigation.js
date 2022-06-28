import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import classes from './Navigation.module.css';

const navigation = (props) => (
    <header className={classes.header}>
        <div className={classes.Logo}>
            <i class="fa-solid fa-street-view"></i>
            <span>Upskil Weather</span>
        </div>
        <nav>
            <ul>
                <li>
                    <i class="fa-solid fa-house-chimney"></i>
                    <NavLink to="/" className={ ({isActive}) => isActive ? classes.active : null } >Home</NavLink>
                </li>
                <li>
                    <i class="fa-solid fa-street-view"></i>
                    <NavLink to="/views" className={ ({isActive}) => isActive ? classes.active : null } >Views</NavLink>
                </li>
                <li>
                    <i class="fa-solid fa-circle-info"></i>
                    <NavLink to="/nothing" className={ ({isActive}) => isActive ? classes.active : null } >Others...</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </header>
);

export default navigation;