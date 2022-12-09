import styles from "../Profile.module.css";
import React from "react";

export type ProfileInfoType = {
    name: string
    dateOfBirth: string
    profilePhoto: string
    profileBanner: string

}
type Type = {
    profileInfo: ProfileInfoType
}


export const ProfileInfo: React.FC<Type> = (props) => {
    return (
        <>
            <div className={styles.bgImage}>
                <img src={props.profileInfo.profileBanner} alt=""/>
            </div>

            <div className={styles.info}>
                <div className={styles.photo}>
                    <img src={props.profileInfo.profilePhoto} alt=""/>
                </div>
                <div className={styles.infoContent}>
                    <h1 className={styles.infoName}>Bekzod</h1>
                    <div className={styles.infoBirth}>18.07.2001</div>
                </div>
            </div>
        </>
    )
}