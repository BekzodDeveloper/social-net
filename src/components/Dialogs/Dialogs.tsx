import React from 'react';
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<DialogsType> = (props) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.dialogs}>

                    <DialogItem dialogsData={props.state.dialogsData}/>

                </div>
                <div className={styles.messages}>
                    <MessageItem messagesData={props.state.messagesData}/>
                </div>
            </div>
        </div>
    );
};
