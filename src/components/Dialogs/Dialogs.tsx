import React, {ChangeEvent, LegacyRef} from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



type DialogMessPropsType = {
   dialogsPage:  DialogsPageType
    addDialogs: (message: string) => void
    message: string
    updateDialogsMessage: (newText: string) => void
}

export const Dialogs = (props: DialogMessPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addText = () => {
        // let text = newPostElement.current?.value
        // alert(text)
        alert('props.addDialogs(props.message)')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateDialogsMessage(e.currentTarget.value)
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
                <textarea onChange={onChangeHandler} value={props.message}></textarea>
                <button onClick={addText}>add message</button>
            </div>


        </div>
    )
}


