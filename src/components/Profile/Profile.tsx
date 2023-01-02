import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfileType = {
    state: ProfilePageType
}

export const Profile: React.FC<ProfileType> = (props) => {

    return <div className={styles.profile}>
        <ProfileInfo profileInfo={props.state.profileInfo}/>
        <MyPosts postsData={props.state.postsData}/>
    </div>
}

