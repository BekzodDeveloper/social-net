import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

export type NavbarType = {
    menuItems: Array<MenuItemsType>
}
export type MenuItemsType = {
    id: number
    link: string
    title: string
}


export const Navbar: React.FC<NavbarType> = (props) => {
    return <nav className={'nav'}>
        <ul className={styles.list}>
            {props.menuItems.map(i => <li key={i.id} className={"nav__item"}>
                <NavLink className={styles.itemLink} activeClassName={styles.itemLinkActive}
                         to={i.link}>{i.title}</NavLink>
            </li>)}
        </ul>
    </nav>
}