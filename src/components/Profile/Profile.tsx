import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (message: string) => void
    message: string
    updateNewPostText: (newText: string ) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText} message={props.message} posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
}


