import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer
})

export type  AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

