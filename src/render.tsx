import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewMessage, changeNewPost, sendMessage, StateType} from "./redux/state";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 sendMessage={sendMessage}
                 changeNewMessage={changeNewMessage}
                 changeNewPost={changeNewPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}



