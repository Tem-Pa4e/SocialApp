import React from 'react';
import s from './Post.module.css';

type PropsPost = {
    id?: number
    message: string
    likesCount: number
}

function Post(props: PropsPost) {
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

export default Post;




