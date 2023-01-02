import React from "react";
import {MessageItemType} from "../../../redux/state";



export type MessageItemsType = {
    messagesData: Array<MessageItemType>
}

export const MessageItem: React.FC<MessageItemsType> = (props) => {
    return (
        <div>
            {props.messagesData.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    )
}