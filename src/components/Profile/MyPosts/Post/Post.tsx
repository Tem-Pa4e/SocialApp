import React from 'react';
import s from './Post.module.css';

type PropsMessage = {
    title: string
}

function Post(props: PropsMessage) {
    return (
        <div className={s.item}>
            <img src="https://hi-news.ru/wp-content/uploads/2020/11/Future_human_Face.png" alt=""/>
            {props.title}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}


export default Post;
