import {NavLink} from "react-router-dom";
import React from "react";


export type DialogsType = {
    id: number
    name: string
}

export const DialogsItem = (props: DialogsType) => {
    let path = "/dialogs/" + props.id

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

