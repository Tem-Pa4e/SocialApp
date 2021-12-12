import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Post, PostPropsType,} from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


// type MyPostPropsType = {
//     posts: Array<PostPropsType>
//     message: string
//     // dispatch: (action: ActionsTypes) => void
//     updateNewPostText: (text: string) => void
//     addPost: () => void
// }

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = createRef<HTMLTextAreaElement>();
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

        // props.dispatch(changeNewTextAC(e.currentTarget.value))
    }


    const addPost = () => {
        props.addPost(props.message.newPostText)
        // props.dispatch(addPostAC(props.message))
    }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea value={props.message.newPostText} onChange={onChangeHandler}/></div>
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




