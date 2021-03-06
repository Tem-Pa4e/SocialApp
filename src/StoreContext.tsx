import React from "react";

const StoreContext = React.createContext({} as any)

export type ProviderType = {
    store: any
    children: React.ReactNode
}


export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext;