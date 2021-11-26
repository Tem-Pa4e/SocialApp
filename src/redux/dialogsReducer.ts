import {ActionsTypes, DialogsPageType} from "./store";
import {MessagesType} from "../components/Dialogs/Message/Message";



export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-DIALOG":
            const newMessage: MessagesType = {
                id: 4,
                message: action.message,
            }
            state.messages.push(newMessage)
            state.newMessages = '';
            return state;
        case "CHANGE-NEW-DIALOG":
            state.newMessages = action.newMessageText
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;