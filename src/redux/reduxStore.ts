import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer

})

export type  AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

