import React from "react";
import {MessageItemType} from "../../../redux/state";
import styles from "./../Dialogs.module.css";



export type MessageItemsType = {
    messagesData: Array<MessageItemType>
}

export const MessageItem: React.FC<MessageItemsType> = (props) => {
    return (
        <div className={styles.messagesWrapper}>
            {props.messagesData.map(m => <div key={m.id} className={styles.messageItemBox}>
                <div className={styles.messageItem}>{m.message}</div>
            </div>)}
        </div>
    )
}