import {NavLink} from "react-router-dom";
import React from "react";
import styles from "../Dialogs.module.css";

type DialogItemType = {
    id: string
    name: string
}
type DialogItemsType = {
    dialogItems: Array<DialogItemType>
}

export const DialogItem: React.FC<DialogItemsType> = (props) => {

    const path='/dialogs/';

    return (
        <ul className={styles.dialogList}>
            {props.dialogItems.map(d => {

                return <li key={d.id}>
                    <NavLink to={path + d.id}> {d.name}</NavLink>
                </li>
            })}
        </ul>

    )
}

