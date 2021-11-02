import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {MessagesType} from "./components/Dialogs/Message/Message";
import {DialogsType} from "./components/Dialogs/DialogsItem/DialogsItem";
import {StateType} from "./redux/state";

type AppType = {
    state: StateType
}




const App = (props:AppType) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/setting'/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App
