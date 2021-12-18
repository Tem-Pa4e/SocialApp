import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC,
    unfollowAC,
    UsersPropsType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


type MapStatePropsType = {
    usersPage: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<UserPropsType, {}> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {

        return (
            <>
                {this.props.isFetching ?
                    <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       usersPage={this.props.usersPage} unfollow={this.props.unfollow} follow={this.props.follow}/>
            </>
        )
    }

};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
export type UserPropsType = MapStatePropsType & MapDispatchPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


