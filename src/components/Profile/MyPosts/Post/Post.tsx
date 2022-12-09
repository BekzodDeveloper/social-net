import React from "react";
import styles from "./Post.module.css"

export type PostType = {
    postsList: Array<PostsListType>
}

export type PostsListType = {
    id: number
    profilePhoto: string
    postContent: string
    likesCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return <div className={styles.post}>
        <ul className={styles.list}>
            {props.postsList.map(p => <li key={p.id} className={styles.item}>
                <div className={styles.itemImg}><img src={p.profilePhoto} alt={p.profilePhoto}/></div>
                <div className={styles.content}>
                    <div>{p.postContent}</div>
                    <div> <button className={styles.like}>LIKE</button> {p.likesCount} </div>
                </div>
            </li>)
            }
        </ul>
    </div>
}