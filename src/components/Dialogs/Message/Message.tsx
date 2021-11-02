import React from "react";


export type MessagesType = {
    id: number
    message: string
}

export const Message = (props: MessagesType) => {
    return (
        <div>{props.message}</div>
    )
}

