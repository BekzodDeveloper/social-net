import React from "react";
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"
import {PostsListType} from "../../../redux/state";

export type MyPostsType = {
    postsData: Array<PostsListType>
}


export const MyPosts: React.FC<MyPostsType> = (props) => {
    return <div className={styles.myposts}>
        <h2>My posts</h2>
        <div className={styles.inner}>
            <textarea cols={80} name="myposts" id="myposts" placeholder={'Type your text...'}/>
            <button className={styles.btn}>Post</button>
        </div>
        <Post postsData={props.postsData}/>
    </div>
}
