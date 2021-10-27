import React from "react";
import s from './Dialogs.module.css'
import DialogsItems, {DialogsType} from "./DialogsItem/DialogsItems";
import Message, {MessagesType} from "./DialogsItem/Message";

let dialogsData: Array<DialogsType> = [
    {id: 1, name: "Santyago"},
    {id: 2, name: "Demiz"},
    {id: 3, name: "Vitalez"},
    {id: 4, name: "Marcipan"},
    {id: 5, name: "Hoogarden"},
    {id: 6, name: "Pavlentiy"},
]

let messagesData: Array<MessagesType> = [
    {id: 1, message: "Hi man"},
    {id: 2, message: "Salut garconc"},
    {id: 3, message: "Nu zdraste"},
]


function Dialogs() {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogsItems name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messagesItem}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs


// type DialogsPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
// }
// type MessagesType = {
//     id:number
//     message:string
// }
// type DialogsType = {
//     id:number
//     name:string
// }



