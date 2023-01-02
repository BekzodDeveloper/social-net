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
                            <Route path={'/profile'}
                                   render={() => <Profile state={props.state.profilePage}/>}/>
                            <Route exact path={'/dialogs'}
                                   render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default App;
