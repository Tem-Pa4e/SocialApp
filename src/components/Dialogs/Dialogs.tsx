import React, {ChangeEvent} from "react";

import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";



// type DialogMessPropsType = {
//     dialogsPage: Array<DialogsType>
//     messagesPage: Array<MessagesType>
//     message: string
//     updateNewMessagesText: (text: string) => void
//     addText: (message: string) => void
// }

export const Dialogs = (props: DialogsPropsType) => {

    const addText = () => {
        props.addText(props.message.newMessages)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessagesText(text)

    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesItem}>
                {messagesElements}
                <textarea onChange={onChangeHandler} value={props.message.newMessages}></textarea>
                <button onClick={addText}>add message</button>
            </div>


        </div>
    )
}


