import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";




// type PropsType = {
//     store: any
// }

const App = () => {

    //const store = props.store



    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>

                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/setting'/>
                </div>
            </div>

    );
}


export default App
