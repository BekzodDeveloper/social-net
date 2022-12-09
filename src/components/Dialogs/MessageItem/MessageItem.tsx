import React from "react";

type MessageItemType = {
    id: string
    message: string
}

type MessageItemsType = {
    messageItem: Array<MessageItemType>
}

export const MessageItem: React.FC<MessageItemsType> = (props) => {
    return (
        <div>Hello</div>
    )
}