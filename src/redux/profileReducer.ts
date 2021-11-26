
import {ActionsTypes, PostPropsType, ProfilePageType} from "./store";


export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: 5,
                message: action.message,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state;
    }
}
export default profileReducer;