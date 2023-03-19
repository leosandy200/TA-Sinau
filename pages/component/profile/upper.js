import React, { useContext, useEffect, useState, useRef } from "react";
import profile from './upper.module.css'
import { FollowContext, ProfileContext, ProfileDataContext, FollowersContext, FollowingContext } from "../../../utils/context";
import { API } from "../../../utils/request";
import { useRouter } from "next/router";

const styles = {
    profile
}

export function UpperProfile({ identifer }) {
    const router = useRouter();
    const img = useRef(null);
    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [publicProfile, setPublicProfile] = useContext(ProfileDataContext);
    const [followers, setFollowers] = useContext(FollowersContext);
    const [following, setFollowing] = useContext(FollowingContext);

    const [buttonElement, setButtonElement] = useState(null)

    const { username } = router.query;

    useEffect(() => {
        if (img == null) return;
        if (!router.isReady) return;

        if (dataUser.namaUser == username) setButtonElement(
            <a className={styles.profile["upper-container-button-styles"]} href="/pengaturan/akun">
                <img src="/icons/profile-pencil.svg" className={styles.profile["left-button-image"]} />
                <div className={styles.profile["left-button-text"]}>EDIT PROFIL</div>
            </a>)
        else if (dataUser.namaUser != username && identifer == false) setButtonElement(
            <a className={styles.profile["upper-container-button-styles"]}>
                <img src="/icons/add-user.svg" className={styles.profile["left-button-image"]} />
                <div className={styles.profile["left-button-text"]}>TAMBAH TEMAN</div>
            </a>)
        else if (dataUser.namaUser != username && identifer == true) setButtonElement(
            <a className={styles.profile["upper-container-button-styles-grey"]}>
                <img src="/icons/friend-added.svg" className={styles.profile["left-button-image"]} />
                <div className={styles.profile["left-button-text"]}>TAMBAH TEMAN</div>
            </a>)

    }, [img, router.isReady])

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
                            <p className={styles.profile["upper-container-text-join"]}>Bergabung pada {new Date(publicProfile?.created_at).toLocaleDateString("id-ID", { dateStyle: "full" })}</p>
                        </div>
                        <div className={styles.profile["upper-container-image-div"]}>
                            <img src="/icons/follow.svg" className={styles.profile["upper-container-image"]} />
                            <p className={styles.profile["upper-container-text-follower"]}>{publicProfile?.followers_count} Mengikuti / {publicProfile?.following_count} Pengikut</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                {/* tombol edit profile  */}

                {buttonElement}
                {/* tombol tambah teman */}


                {/* tombol sudah teman */}
            </div>
        </div>
    );
}