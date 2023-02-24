import React from "react";
import profile from './upper.module.css'

const styles = {
    profile
}

export function UpperProfile({ user }) {
    return (
        <div className={styles.profile["upper-container"]}>
            <div className={styles.profile["upper-container-left"]}>
                <div className={styles.profile["upper-container-avatar-box"]}>
                    <div className={styles.profile["upper-container-avatar-div"]}>
                        <img className={styles.profile["upper-container-avatar-setting"]} src="/img/avatar.svg" />
                    </div>
                </div>
                <div className={styles.profile["upper-container-text"]}>
                    <div className={styles.profile["upper-container-name-div"]}>
                        <h1 className={styles.profile["upper-container-text-name"]}>{user.nama}</h1>
                        <p className={styles.profile["upper-container-text-username"]}>{user.namaUser}</p>
                    </div>
                    <div>
                        <div className={styles.profile["upper-container-image-div"]}>
                            <img src="/icons/join.svg" className={styles.profile["upper-container-image"]} />
                            <p className={styles.profile["upper-container-text-join"]}>Bergabung Pada {user.joined_at}</p>
                        </div>
                        <div className={styles.profile["upper-container-image-div"]}>
                            <img src="/icons/follow.svg" className={styles.profile["upper-container-image"]} />
                            <p className={styles.profile["upper-container-text-follower"]}>0 Mengikuti | 0 Pengikut</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className={styles.profile["upper-container-button-styles"]}>
                    <img src="/icons/profile-pencil.svg" />
                    <div className={styles.profile["left-button-text"]}>EDIT PROFIL</div>
                </a>
            </div>
        </div>
    );
}