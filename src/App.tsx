import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className={"main-content"}>
                <div className={'container'}>
                    <div className={'main-content__inner'}>
                        <Navbar/>
                        <div className={"main-content__body"}>
                            <Profile/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
