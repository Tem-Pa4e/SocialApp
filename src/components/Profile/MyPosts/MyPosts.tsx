import React from 'react';
import s from './MyPosts.module.css';
import {Post, PostPropsType,} from './Post/Post';


type MyPostPropsType = {
    posts: Array<PostPropsType>
}

export const MyPosts = (props: MyPostPropsType) => {

    let postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}




