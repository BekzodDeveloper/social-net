import React, {ChangeEvent} from 'react';
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
    sendMessage: (newMessageText: string) => void
    changeNewMessage: (newMessage: string) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const sendMessage = () => {
        if (props.state.newMessage) {

            props.sendMessage(props.state.newMessage);
            props.state.newMessage = '';
        }

    }
    const NewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value);

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.dialogs}>

                    <DialogItem dialogsData={props.state.dialogsData}/>

                </div>
                <div className={styles.messages}>
                    <MessageItem messagesData={props.state.messagesData}/>
                    <div className={styles.innerTextareaWrap}>

                        <div className={styles.innerTextarea}>
                            <textarea value={props.state.newMessage}
                                      onChange={NewMessageChangeHandler}
                                      cols={80}
                                      name="mymessage"
                                      id="mymessage"
                                      placeholder={'Write a message...'}/>
                            <button onClick={sendMessage} className={styles.btn}>Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
