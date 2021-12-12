import React from 'react';
import {connect} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersPropsType} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import Users from "./Users";


type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersReducer
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersPropsType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export type UserPropsType = MapStatePropsType & MapDispatchPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

