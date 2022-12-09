import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MenuItemsType, Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import logo from "./images/logo.svg";
import profilePhoto from "./images/profile-photo.jpg";
import {PostsListType} from "./components/Profile/MyPosts/Post/Post";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ProfileInfoType} from "./components/Profile/ProfileInfo/ProfileInfo";


const menuItems: Array<MenuItemsType> = [
    {id: 1, link: "/profile", title: "Profile"},
    {id: 2, link: "/dialogs", title: "Dialogs"},
    {id: 3, link: "/settings", title: "Settings"},
];

const postsList: Array<PostsListType> = [
    {
        id: 1,
        profilePhoto: profilePhoto,
        postContent: "Lorqqqqqqem ipsum dolor sit amet, consectetur adipisicing elit.",
        likesCount: 1
    },
    {
        id: 2,
        profilePhoto: profilePhoto,
        postContent: "Lorconsectetur adipisicing elit.",
        likesCount: 11

    }
];

const profileInfo: ProfileInfoType = {
    name: "Bekzod",
    dateOfBirth: "18.07.2001",
    profilePhoto: profilePhoto,
    profileBanner: "https://swall.teahub.io/photos/small/35-352828_dark-landscape-wallpaper-hd.jpg"
}


const App = () => {


    return (
        <div className="app-wrapper">
            <Header logo={logo}/>
            <div className={"main-content"}>
                <div className={'container'}>
                    <div className={'main-content__inner'}>

                        <Navbar menuItems={menuItems}/>
                        <div className={"main-content__body"}>
                            <Route path={'/profile'}
                                   render={() => <Profile profileInfo={profileInfo} postsList={postsList}/>}/>
                            <Route exact path={'/dialogs'} render={() => <Dialogs/>}/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default App;
