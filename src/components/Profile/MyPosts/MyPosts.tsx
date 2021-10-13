import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post title='Hi, how are you?'/>
                <Post title="It's my first post"/>
            </div>
        </div>
    )
}


export default MyPosts;
