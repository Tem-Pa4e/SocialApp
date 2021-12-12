

export type UsersPropsType = {
    id: number
    photoURL?: string
    followed: boolean
    name: string
    status: string
    photos: {small: null, large: null}
    //location: {city: string, country: string}
}


const initialState = {
    users: [
        // {id: 1, photoURL: "https://www.vokrug.tv/pic/person/3/9/c/b/39cbccbd2d1a0c01ac8101ae3a6b04d6.jpg",
        //     followed: false, fullName: "Alex K", status: "Searching my love", location: {city: "Grodno", country: "Belarus"}},
        // {id: 1, photoURL: "https://static.tnt-online.ru/storage/media/30551/4AsJeip9CvWLhDhJHgFtQUrAvH7Ti4XsWJ9Rtjcl.jpeg",
        //     followed: true, fullName: "Deoniz M", status: "Searching my love", location: {city: "Grodno", country: "Belarus"}},
        // {id: 1, photoURL: "https://pbs.twimg.com/profile_images/3256225467/bd3b731f44af613d196cbf21f9f5f2c9_400x400.jpeg",
        //     followed: true, fullName: "Pavlo U", status: "Searching my love", location: {city: "Grodno", country: "Belarus"}},
    ] as Array<UsersPropsType>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users].map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: [...state.users].map(u => u.id === action.id ? {...u, followed:false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users,...action.users]}
        default:
            return state;
    }
}


export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => ({type: "FOLLOW", id: userID}) as const
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", id: userID}) as const
export const setUsersAC = (users: Array<UsersPropsType>) => ({type: "SET-USERS", users: users}) as const
