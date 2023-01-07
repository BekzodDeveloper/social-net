import {NavLink} from "react-router-dom";
import React from "react";
import styles from "../Dialogs.module.css";
import {DialogItemType} from "../../../redux/state";


export type DialogItemsType = {
    dialogsData: Array<DialogItemType>
}

export const DialogItem: React.FC<DialogItemsType> = (props) => {

    const path = '/dialogs/';

    let DialogDataElements = props.dialogsData.map(d => {
        return <li className={styles.dialogLink} key={d.id}>
            <NavLink to={path + d.id}> {d.name}</NavLink>
        </li>
    })

    return (
        <ul className={styles.dialogList}>
            {DialogDataElements}
        </ul>

    )
}

