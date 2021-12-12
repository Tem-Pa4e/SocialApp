import React from 'react';
import {UserPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";


class Users extends React.Component<UserPropsType, { }> {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (

            <div>

                {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photos.small !==null ? u.photos.small : "https://pbs.twimg.com/profile_images/3256225467/bd3b731f44af613d196cbf21f9f5f2c9_400x400.jpeg"}/>
                    </div>
                </span>
                    <span>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button> }

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

};

export default Users;