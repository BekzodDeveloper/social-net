import React from "react";
import "./Navbar.css";

export const Navbar = () => {
    return <nav className={'nav'}>
        <ul className={"nav__list"}>
            <li className={"nav__item"}><a className={"nav__item-link"} href="#!">Profile</a></li>
            <li className={"nav__item"}><a className={"nav__item-link"} href="#!">Messages</a></li>
        </ul>
    </nav>
}