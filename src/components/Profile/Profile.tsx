import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsListType} from "./MyPosts/Post/Post";
import {ProfileInfo, ProfileInfoType} from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    postsList: Array<PostsListType>
    profileInfo: ProfileInfoType
}


export const Profile: React.FC<ProfileType> = (props) => {

    return <div className={styles.profile}>
        <ProfileInfo profileInfo={props.profileInfo}/>
        <MyPosts postsList={props.postsList}/>
    </div>
}

