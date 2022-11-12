import React from "react";
import profilePhoto from "./../../images/profile-photo.jpg";
import "./Profile.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={"profile"}>
        <div className={"profile__bgImage"}>
            <img src="https://swall.teahub.io/photos/small/35-352828_dark-landscape-wallpaper-hd.jpg" alt=""/>
        </div>

        <div className={"profile__info"}>
            <div className={"profile__photo"}>
                <img src={profilePhoto} alt=""/>
            </div>
            <div className={"profile__info-content"}>
                <h1 className={"profile__info-name"}>Bekzod</h1>
                <div className={"profile__info-birth"}>18.07.2001</div>
            </div>
        </div>
        <MyPosts/>
    </div>
}

