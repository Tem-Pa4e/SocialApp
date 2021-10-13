import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://www.michigannature.org/images/img_library/crp/1-132-7-slider-bg-2.jpg"
                    alt=""/>
            </div>
            <div>
                ava
            </div>
            <MyPosts/>
        </div>

    )
}


export default Profile
