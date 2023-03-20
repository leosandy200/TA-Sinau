import React from "react";
import styles from '../profile/card-temen.module.css'

export function CardTemen({ avatarUser, nama, TotalXp, username, identifier }) {
    return (
        <div className={styles["container"]}>
            <a className={styles["container-link"]} href={`/profile/${username}`} >
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