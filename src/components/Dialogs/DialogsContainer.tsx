import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {addDialogAC, changeNewDialogAC, InitialStateType} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";


type DialogMessPropsType = {
    store: any
    // dialogsPage: DialogsPageType
    // message: string
    // dispatch: (action: ActionsTypes) => void
}

// export const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {store => {
//             const dispatch = store.dispatch
//             const state = store.getState().dialogsReducer
//
//             const addText = () => {
//
//                 dispatch(addDialogAC(state.newMessages))
//             }
//
//             const updateNewMessagesText = (text: string) => {
//                 dispatch(changeNewDialogAC(text))
//             }
//             return (
//                 <Dialogs dialogsPage={state.dialogs} messagesPage={state.messages} message={state.newMessages}
//                          updateNewMessagesText={updateNewMessagesText} addText={addText}/>
//             )
//         }
//         }
//     </StoreContext.Consumer>
// }

type MapStatePropsType = {
    dialogsPage: InitialStateType
    messagesPage: InitialStateType
    message: InitialStateType
}
type MapDispatchPropsType = {
    updateNewMessagesText: (text: string) => void
    addText: (message: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer,
        messagesPage: state.dialogsReducer,
        message: state.dialogsReducer,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessagesText: (text: string) => {
            dispatch(changeNewDialogAC(text))
        },
        addText: (message: string) => {
            dispatch(addDialogAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

