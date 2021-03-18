import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='content'>
                    <Nav/>
                    <div className='inner-content'>
                        <Route path='/messages' component={Dialogs}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/feed' component={Feed}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
