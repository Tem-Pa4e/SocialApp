import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type PostPropsType = {
    id?: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessages: string
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof changeNewDialogAC>
    | ReturnType<typeof addDialogAC>
export const addPostAC = (message: string) => ({type: "ADD-POST", message: message}) as const
export const changeNewTextAC = (newText: string) => ({type: "CHANGE-NEW-TEXT", newText: newText}) as const
export const addDialogAC = (message: string) => ({type: "ADD-DIALOG", message: message}) as const
export const changeNewDialogAC = (newMessageText: string) => ({
    type: "CHANGE-NEW-DIALOG",
    newMessageText: newMessageText
}) as const

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 23},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Santyago"},
                {id: 2, name: "Demiz"},
                {id: 3, name: "Vitalez"},
                {id: 4, name: "Marcipan"},
                {id: 5, name: "Hoogarden"},
                {id: 6, name: "Pavlentiy"},
            ],
            messages: [
                {id: 1, message: "Hi man"},
                {id: 2, message: "Salut garconc"},
                {id: 3, message: "Nu zdraste"},
            ],
            newMessages: '',
        },
        sidebar: {}
    },
    _renderTree() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._renderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._renderTree()

        // if (action.type === 'ADD-POST') {
        //     const newPost: PostPropsType = {
        //         id: 5,
        //         message: action.message,
        //         likesCount: 0,
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._renderTree();
        // } else if (action.type === 'CHANGE-NEW-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._renderTree()
        // } else if (action.type === 'ADD-DIALOG') {
        //     const newMessage: MessagesType = {
        //         id: 4,
        //         message: action.message,
        //     }
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.newMessages = '';
        //     this._renderTree();
        // } else if (action.type === 'CHANGE-NEW-DIALOG') {
        //     this._state.dialogsPage.newMessages = action.newMessageText
        //     this._renderTree()
        // }
    },
}



