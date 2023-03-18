import React from "react";
import styles from '../profile/follow-profile.module.css'

export function FollowProfile({ avatarUser, nama, TotalXp, username, identifier, index }) {

    return (
        <div className={((identifier <= 5 && index+1 == identifier) ? styles["container-last"] : styles["container"]) }>
            <a className={styles["container-link"]} href={`/profile/${username}`}>
                <div className={styles["container-profile-imgbox"]}>
                    <img className={styles["container-profile-img"]} src={(avatarUser) ? avatarUser : '/icons/profile-user.svg'} />
                </div>
                <div className={styles["container-profile-databox"]}>
                    <h3 className={styles["container-profile-username"]}>
                        {nama} 
                    </h3>
                    <div className={styles["container-profile-xp"]}>
                        {TotalXp} XP
                    </div>
                </div>
            </a>
        </div>
    )
}