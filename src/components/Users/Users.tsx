import React from "react";
import {UsersPropsType} from "../../redux/usersReducer";
import s from './Users.module.css'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    usersPage: Array<UsersPropsType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            <div>
                {pages.map(p => {
                        return <span onClick={() => {
                            props.onPageChanged(p)
                        }}> {p}</span>
                    })}

        </div>
    {props.usersPage.map(u => <div key={u.id}>
    <span>
        <div>
            <img className={s.userPhoto}
        src={u.photos.small !== null ? u.photos.small : "https://pbs.twimg.com/profile_images/3256225467/bd3b731f44af613d196cbf21f9f5f2c9_400x400.jpeg"}/>
    </div>
    </span>
    <span>
    <div>
        {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
    : <button onClick={() => props.follow(u.id)}>Follow</button>}

    </div>
    </span>
    <span>
    <span>
        <div>{u.name}</div>
    <div>{u.status}</div>
    </span>
    <span>
    <div>{"u.location.country"}</div>
    <div>{"u.location.city"}</div>

    </span>
    </span>

    </div>)}
    </div>
    );


}