import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Post, PostPropsType,} from './Post/Post';



type MyPostPropsType = {
    posts: Array<PostPropsType>
    addPost: (message: string) => void
    updateNewPostText: (newText: string ) => void
    message: string
}

export const MyPosts = (props: MyPostPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    // let [postsMessage, setPostsMessage] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    // let postMessage = createRef<HTMLTextAreaElement>();
    const addPost = () => {

            props.addPost(props.message)

    }
    // const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === "Enter") {
    //         if (postMessage.current) {
    //             props.addPost(postMessage.current.value)
    //     }
    // }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                {/*<div><textarea onChange={onChangeHandler} value={postsMessage}></textarea></div>*/}
                <div><textarea value={props.message} onChange={onChangeHandler} /></div>
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




