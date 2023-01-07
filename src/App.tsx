import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import logo from "./images/logo.svg";
import {Route} from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {StateType} from "./redux/state";

export type AppType = {
    state: StateType
    addPost: (newPostText: string) => void
    sendMessage: (newMessageText: string) => void
    changeNewMessage: (newMessage: string) => void
    changeNewPost: (newPost: string) => void
}


const App: React.FC<AppType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header logo={logo}/>
            <div className={"main-content"}>
                <div className={'container'}>
                    <div className={'main-content__inner'}>

                        <Navbar state={props.state.sidebar}
                                profileInfo={props.state.profilePage.profileInfo}/>
                        <div className={"main-content__body"}>
                            <Route exact path={'/profile'}
                                   render={() => <Profile
                                       state={props.state.profilePage}
                                       addPost={props.addPost}
                                       changeNewPost={props.changeNewPost}
                                   />}/>
                            <Route exact path={'/dialogs'}
                                   render={() => <Dialogs
                                       state={props.state.dialogsPage}
                                       sendMessage={props.sendMessage}
                                       changeNewMessage={props.changeNewMessage}/>}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default App;
