import React from 'react';
import styles from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";


export const Dialogs = (props: any) => {

    const dialogItems = [
        {id: '1', name: 'Bekzod'},
        {id: '2', name: 'Ibrohim'}
    ];

    const messageItems = [
        {id: '1', message: 'Helloo!'},
        {id: '2', message: 'Hey Bekzod!'}
    ];


    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.dialogs}>

                    <DialogItem dialogItems={dialogItems}/>

                </div>
                <div className={styles.messages}>
                    <MessageItem messageItem={messageItems}/>
                </div>
            </div>
        </div>
    );
};
