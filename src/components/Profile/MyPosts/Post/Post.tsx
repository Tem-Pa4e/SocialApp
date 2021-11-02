import React from 'react';
import s from './Post.module.css';


export type PostPropsType = {
    id?: number
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://hi-news.ru/wp-content/uploads/2020/11/Future_human_Face.png" alt=""/>
            {props.message}
            <div>
                like {props.likesCount}
            </div>
        </div>
    )
}





