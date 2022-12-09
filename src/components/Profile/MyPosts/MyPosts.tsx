import React from "react";
import {Post, PostsListType} from "./Post/Post";
import styles from "./MyPosts.module.css"

export type MyPostsType = {
    postsList: Array<PostsListType>
}


export const MyPosts: React.FC<MyPostsType> = (props) => {
    return <div className={styles.myposts}>
        <h2>My posts</h2>
        <div className={styles.inner}>
            <textarea cols={80} name="myposts" id="myposts" placeholder={'Type your text...'}/>
            <button className={styles.btn}>Post</button>
        </div>
        <Post postsList={props.postsList}/>
    </div>
}
