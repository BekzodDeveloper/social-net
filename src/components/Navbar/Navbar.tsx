import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
import {ProfileInfoType, SidebarType} from "../../redux/state";

export type NavbarType = {
    state: SidebarType
    profileInfo: ProfileInfoType
}

export const Navbar: React.FC<NavbarType> = (props) => {
    return <nav className={styles.nav}>
        {/*<div>*/}
        {/*    <div>*/}
        {/*        <img className={styles.friendsPhoto} src={props.profileInfo.profilePhoto} alt=""/>*/}
        {/*        <p>{props.profileInfo.name}</p>*/}
        {/*    </div>*/}
        {/*    <div><button> X </button></div>*/}
        {/*</div>*/}
        <ul className={styles.list}>
            {props.state.menuItems.map(i => <li key={i.id} className={styles.navItem}>
                <NavLink className={styles.itemLink} activeClassName={styles.itemLinkActive}
                         to={i.link}>{i.title}</NavLink>
            </li>)}
        </ul>
        <div className={styles.friends}>
            <h2>Friends</h2>
            <ul className={styles.friendsList}>
                {props.state.friendsList.map(friend => {
                    return <li key={friend.id}>
                        <img className={styles.friendsPhoto}
                             src={friend.profilePhoto} alt=""/>
                        <div>{friend.name}</div>
                    </li>
                })}
            </ul>
        </div>
    </nav>
}