import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {

    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src="https://www.michigannature.org/images/img_library/crp/1-132-7-slider-bg-2.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBloc}>
                ava+description
            </div>
        </div>
    )
}



