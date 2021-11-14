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
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.store._state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile updateNewPostText={props.store.updateNewPostText.bind(props.store)} message={props.store._state.profilePage.newPostText} profilePage={props.store._state.profilePage} addPost={props.store.addPost.bind(props.store)}/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/setting'/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App
