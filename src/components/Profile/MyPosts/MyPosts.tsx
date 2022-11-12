import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div className={"myposts"}>
        <h2>My posts</h2>
        <div className={"myposts__inner"}>
            <textarea name="myposts" id="myposts" placeholder={'Type your text...'}/>
            <button className={"myposts__btn"}>Post</button>
        </div>
        <Post/>
    </div>
}
