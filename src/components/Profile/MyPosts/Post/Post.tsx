import profilePhoto from "../../../../images/profile-photo.jpg";
import React from "react";

export const Post = () => {
    return <div className={"post"}>
        <ul className={"post__list"}>
            <li className={"post__item"}>
                <div className={"post__item-img"}><img src={profilePhoto} alt=""/></div>
                <div className={"post__content"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
                    aut beatae cupiditate delectus deleniti dolorem, fuga illum iusto laudantium maiores mollitia
                    numquam, obcaecati optio praesentium quas quasi voluptates voluptatum. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                </div>
            </li>
        </ul>
    </div>
}