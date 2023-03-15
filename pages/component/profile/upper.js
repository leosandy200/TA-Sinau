import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import profile from './upper.module.css'
import axios from "axios";
import { FollowContext, ProfileContext, ProfileDataContext } from "../../../utils/context";
import { API } from "../../../utils/request";


const styles = {
    profile
}

export function UpperProfile({ avatarUser, name, username, joined, following, follower }) {

    const img = useRef(null)
    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [publicProfile, setPublicProfile] = useContext(ProfileDataContext);
    const [Follow, setFollow] = useContext(FollowContext)


    useEffect(() => {
        if (img == null) return;
        if (!dataUser.id) return;

        (async () => {
            try {

                const Following = await API.get(`/following/${dataUser.id}`);
                const Followers = await API.get(`/followers/${dataUser.id}`);

                if (!Followers && !Following) return;

                const FollowingAmount = Following.data.data;
                const FollowersAmount = Followers.data.data;

                setFollow([FollowingAmount, FollowersAmount]);

            } catch (error) {
                console.log(error);
            }
        })()

    }, [img, dataUser])

    return (
        <div className={styles.profile["upper-container"]}>
            <div className={styles.profile["upper-container-left"]}>
                <div className={styles.profile["upper-container-avatar-box"]}>
                    <div className={styles.profile["upper-container-avatar-div"]}>
                        <img className={styles.profile["upper-container-avatar-setting"]} ref={img} src={(publicProfile?.avatar) ? publicProfile.avatar : '/icons/profile-user.svg'} />
                    </div>
                </div>
                <div className={styles.profile["upper-container-text"]}>
                    <div className={styles.profile["upper-container-name-div"]}>
                        <h1 className={styles.profile["upper-container-text-name"]}>{publicProfile?.nama}</h1>
                        <p className={styles.profile["upper-container-text-username"]}>{publicProfile?.namaUser}</p>
                    </div>
                    <div>
                        <div className={styles.profile["upper-container-image-div"]}>
                            <img src="/icons/join.svg" className={styles.profile["upper-container-image"]} />
                            <p className={styles.profile["upper-container-text-join"]}>Bergabung pada {publicProfile?.joined_at}</p>
                        </div>
                        <div className={styles.profile["upper-container-image-div"]}>
                            <img src="/icons/follow.svg" className={styles.profile["upper-container-image"]} />
                            <p className={styles.profile["upper-container-text-follower"]}>{publicProfile?.total_following} Mengikuti | {publicProfile?.total_followers} Pengikut</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className={styles.profile["upper-container-button-styles"]} href="/akun">
                    <img src="/icons/profile-pencil.svg" className={styles.profile["left-button-image"]} />
                    <div className={styles.profile["left-button-text"]}>EDIT PROFIL</div>
                </a>
            </div>
        </div>
    );
}