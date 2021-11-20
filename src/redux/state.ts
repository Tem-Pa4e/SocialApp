type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type PostPropsType = {
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
type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you?", likesCount: 12},
//             {id: 2, message: "It's my first post", likesCount: 23},
//         ],
//         newPostText: '',
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Santyago"},
//             {id: 2, name: "Demiz"},
//             {id: 3, name: "Vitalez"},
//             {id: 4, name: "Marcipan"},
//             {id: 5, name: "Hoogarden"},
//             {id: 6, name: "Pavlentiy"},
//         ],
//         messages: [
//             {id: 1, message: "Hi man"},
//             {id: 2, message: "Salut garconc"},
//             {id: 3, message: "Nu zdraste"},
//         ]
//     },
//     sidebar: {}
// }


export type StoreType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    addPost: (message: string) => void
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
    addDialogs: (message: string) => void
    updateDialogsMessage: (newText: string) => void
}

// type AddPostActionType = {
//     type: 'ADD-POST'
//     message: string
// }


export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
export const addPostAC = (message: string) => ({type: "ADD-POST", message: message}) as const
export const changeNewTextAC = (newText: string) => ({type: "CHANGE-NEW-TEXT", newText: newText }) as const

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
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._renderTree()
    },
    addPost(message: string) {
        const newPost: PostPropsType = {
            id: 5,
            message: message,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._renderTree();
    },
    subscribe(observer: () => void) {
        this._renderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch (action) {
        if (action.type === 'ADD-POST'){
            const newPost: PostPropsType = {
                id: 5,
                message: action.message,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._renderTree();
        }else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._renderTree()
        }
    },
    addDialogs (message: string) {
        const newMessage: MessagesType = {
            id: 4,
            message: message,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessages = '';
        this._renderTree();
    },
    updateDialogsMessage (newMessageText: string) {
        this._state.dialogsPage.newMessages = newMessageText
        this._renderTree()
    },
}



