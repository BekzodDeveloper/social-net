import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"
import {PostsType} from "../../../redux/state";

export type MyPostsType = {
    posts:PostsType
    addPost: (newPostText: string) => void
    changeNewPost: (newPost: string) => void
}


export const MyPosts: React.FC<MyPostsType> = (props) => {

    const addPost = () => {
        if (props.posts.newPost) {
            props.addPost(props.posts.newPost);
            props.posts.newPost='';
        }

    }

    const NewPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPost(e.currentTarget.value);
    }

    return <div className={styles.myposts}>
        <h2>My posts</h2>
        <div className={styles.inner}>
            <textarea onChange={NewPostChangeHandler}
                      value={props.posts.newPost}
                      cols={80}
                      name="myposts"
                      id="myposts" placeholder={'Type your text...'}/>
            <button onClick={addPost} className={styles.btn}>Post</button>
        </div>
        <Post postsData={props.posts.postsData}/>
    </div>
}
