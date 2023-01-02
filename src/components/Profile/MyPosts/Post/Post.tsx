import React from "react";
import styles from "./Post.module.css"
import {PostsListType} from "../../../../redux/state";

export type PostType = {
    postsData: Array<PostsListType>
}


export const Post: React.FC<PostType> = (props) => {

    let postsDataElements = props.postsData.map(p => <li key={p.id} className={styles.item}>
        <div className={styles.itemImg}><img src={p.profilePhoto} alt={p.profilePhoto}/></div>
        <div className={styles.content}>
            <div>{p.postContent}</div>
            <div>
                <button className={styles.like}>LIKE 👍</button>
                {p.likesCount} </div>
        </div>
    </li>);

    return <div className={styles.post}>
        <ul className={styles.list}>
            {postsDataElements}
        </ul>
    </div>
}