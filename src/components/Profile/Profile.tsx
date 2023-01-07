import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfileType = {
    state: ProfilePageType
    addPost: (newPostText: string) => void
    changeNewPost: (newPost: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {

    return <div className={styles.profile}>
        <ProfileInfo profileInfo={props.state.profileInfo}                     />
        <MyPosts posts={props.state.posts}
                 addPost={props.addPost}
                 changeNewPost={props.changeNewPost}
        />
    </div>
}

