

type PostPropsType = {
    id: number
    message: string
    likesCount: number
}


const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 23},
    ] as Array<PostPropsType>,
    newPostText: '',
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: 5,
                message: action.message,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state;
    }
}
export default profileReducer;

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = (message: string) => ({type: "ADD-POST", message: message}) as const
export const changeNewTextAC = (newText: string) => ({type: "CHANGE-NEW-TEXT", newText: newText}) as const