import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";
import {PostPropsType} from "./MyPosts/Post/Post";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(message: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div  className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
}


