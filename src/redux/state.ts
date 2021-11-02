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
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:SidebarType
}

export let state: StateType = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 23 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Santyago" },
            { id: 2, name: "Demiz" },
            { id: 3, name: "Vitalez" },
            { id: 4, name: "Marcipan" },
            { id: 5, name: "Hoogarden" },
            { id: 6, name: "Pavlentiy" },
        ],
        messages: [
            { id: 1, message: "Hi man" },
            { id: 2, message: "Salut garconc" },
            { id: 3, message: "Nu zdraste" },
        ]
    },
    sidebar:{}
}