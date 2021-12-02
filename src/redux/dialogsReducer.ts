


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}



const initialState = {
        dialogs: [
            {id: 1, name: "Santyago"},
            {id: 2, name: "Demiz"},
            {id: 3, name: "Vitalez"},
            {id: 4, name: "Marcipan"},
            {id: 5, name: "Hoogarden"},
            {id: 6, name: "Pavlentiy"},
        ]as Array<DialogsType>,
        messages: [
            {id: 1, message: "Hi man"},
            {id: 2, message: "Salut garconc"},
            {id: 3, message: "Nu zdraste"},
        ]as Array<MessagesType>,
        newMessages: '',
    }
export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

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

export type ActionsTypes = ReturnType<typeof changeNewDialogAC> | ReturnType<typeof addDialogAC>

export const addDialogAC = (message: string) => ({type: "ADD-DIALOG", message: message}) as const
export const changeNewDialogAC = (newMessageText: string) => ({type: "CHANGE-NEW-DIALOG",
    newMessageText: newMessageText}) as const
