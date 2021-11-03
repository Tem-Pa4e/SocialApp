import React, {LegacyRef} from "react";
import s from './Dialogs.module.css'
import {DialogsItem, DialogsType} from "./DialogsItem/DialogsItem";
import {Message, MessagesType} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



type DialogMessPropsType = {
   dialogsPage:  DialogsPageType
}

export const Dialogs = (props: DialogMessPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addText = () => {

        let text = newPostElement.current?.value
        alert(text)
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesItem}>
                {messagesElements}
                <textarea ref={newPostElement}></textarea>
                <button onClick={addText}>add message</button>
            </div>


        </div>
    )
}


