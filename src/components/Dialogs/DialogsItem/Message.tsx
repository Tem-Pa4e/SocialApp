import React from "react";


export type MessagesType = {
    id: number
    message: string
}


function Message(props: MessagesType) {
    return (
        <div>{props.message}</div>
    )
}

export default Message;