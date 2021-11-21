import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {StoreType} from "./redux/state";



type PropsType = {
    store: StoreType
}

const App = (props: PropsType) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dispatch={props.store.dispatch.bind(props.store)} message={state.dialogsPage.newMessages} dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile dispatch={props.store.dispatch.bind(props.store)}  message={state.profilePage.newPostText} profilePage={state.profilePage} />}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/setting'/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App
