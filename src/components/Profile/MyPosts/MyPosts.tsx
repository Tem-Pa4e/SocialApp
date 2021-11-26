import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Post, PostPropsType,} from './Post/Post';
import {ActionsTypes, addPostAC, changeNewTextAC} from "../../../redux/store";


type MyPostPropsType = {
    posts: Array<PostPropsType>
    message: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }

    // let postMessage = createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.dispatch(addPostAC(props.message))
    }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea value={props.message} onChange={onChangeHandler}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}




