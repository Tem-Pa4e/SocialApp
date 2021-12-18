

export type UsersPropsType = {
    id: number
    photoURL?: string
    followed: boolean
    name: string
    status: null
    photos: {small: null, large: null}
    uniqueUrlName: null
    //location: {city: string, country: string}
}


const initialState = {
    users: [] as Array<UsersPropsType>,
    pageSize: 50,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users].map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: [...state.users].map(u => u.id === action.id ? {...u, followed:false} : u)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}


export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setUsersTotalCountAC> |
    ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userID: number) => ({type: "FOLLOW", id: userID}) as const
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", id: userID}) as const
export const setUsersAC = (users: Array<UsersPropsType>) => ({type: "SET-USERS", users: users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount}) as const
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching})as const