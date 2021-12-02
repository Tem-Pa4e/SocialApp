import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';

import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {addPostAC, changeNewTextAC, InitialStateType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";




// type MyPostPropsType = {
//     store: any
//     // posts: Array<PostPropsType>
//     // message: string
//     // dispatch: (action: ActionsTypes) => void
// }

// export const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {store => {
//             const dispatch = store.dispatch.bind(store)
//             const state = store.getState().profileReducer
//             const addPost = () => {
//
//                 dispatch(addPostAC(state.newPostText))
//             }
//             const onPostChange = (text: string) => {
//                 dispatch(changeNewTextAC(text))
//             }
//             return (
//                 <MyPosts posts={state.posts} message={state.newPostText} updateNewPostText={onPostChange}
//                          addPost={addPost}/>
//             )
//         }
//         }
//     </StoreContext.Consumer>
// }


type MapStatePropsType = {
    posts: InitialStateType
    message: InitialStateType
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profileReducer,
        message: state.profileReducer,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changeNewTextAC(text))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



