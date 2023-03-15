import React, { useEffect } from "react";
import styles from '../profile/follow-profile.module.css'


export function FollowProfile({ avatarUser, namaUser, TotalXp }) {

    return (
        <div className={styles["container"]}>
            <a className={styles["container-link"]}>
                <div className={styles["container-profile-imgbox"]}>
                    <img className={styles["container-profile-img"]} src={(avatarUser) ? avatarUser : '/icons/profile-user.svg'} />
                </div>
                <div className={styles["container-profile-databox"]}>
                    <h3 className={styles["container-profile-username"]}>
                        {namaUser}
                    </h3>
                    <div className={styles["container-profile-xp"]}>
                        {TotalXp} XP
                    </div>
                </div>
            </a>
        </div>
    )
}