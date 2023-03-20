import React, { useContext, useEffect, useState, useRef } from "react";
import profile from './upper.module.css'
import { FollowContext, ProfileContext, ProfileDataContext, FollowersContext, FollowingContext } from "../../../utils/context";
import { API } from "../../../utils/request";
import { useRouter } from "next/router";

const styles = {
    profile
}

export function UpperProfile() {
    const router = useRouter();
    const img = useRef(null);
    // const addFollow = useRef(null);
    // const removeFollow = useRef(null);

    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [publicProfile, setPublicProfile] = useContext(ProfileDataContext);
    const [followers, setFollowers] = useContext(FollowersContext);
    const [following, setFollowing] = useContext(FollowingContext);

    const [buttonElement, setButtonElement] = useState(
        <a className={styles.profile["upper-container-button-styles"]} href="/pengaturan/akun">
            <img src="/icons/profile-pencil.svg" className={styles.profile["left-button-image"]} />
            <div className={styles.profile["left-button-text"]}>EDIT PROFIL</div>
        </a>)

    const { username } = router.query;

    const addFollow = async () => {

        const requestHeaderFollow = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: "application/json"
            }
        }

        try {
            const responseAdd = await API.get(`/follow/${publicProfile.id}`, requestHeaderFollow)
            if (responseAdd.data.status == 201)
                setButtonElement(
                    <a onClick={removeFollow} className={styles.profile["upper-container-button-styles-grey"]}>
                        <img src="/icons/friend-added.svg" className={styles.profile["left-button-image"]} />
                        <div className={styles.profile["left-button-text"]}>Mengikuti</div>
                    </a>)

        } catch (error) {
            console.log(error);
        }
    };

    const removeFollow = async () => {

        const requestHeaderRemove = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: "application/json"
            }
        }

        try {
            const responseRemove = await API.get(`/unfollow/${publicProfile.id}`, requestHeaderRemove)
            if (responseRemove.data.status == 200)
                setButtonElement(
                    <a onClick={addFollow} className={styles.profile["upper-container-button-styles"]}>
                        <img src="/icons/add-user.svg" className={styles.profile["left-button-image"]} />
                        <div className={styles.profile["left-button-text"]}>TAMBAH TEMAN</div>
                    </a>)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (img == null) return;
        if (!router.isReady) return;
        if (!publicProfile) return;

        if (dataUser.namaUser != username && publicProfile.isFollowing == false) setButtonElement(
            <a onClick={addFollow} className={styles.profile["upper-container-button-styles"]}>
                <img src="/icons/add-user.svg" className={styles.profile["left-button-image"]} />
                <div className={styles.profile["left-button-text"]}>TAMBAH TEMAN</div>
            </a>)

        else if (dataUser.namaUser != username && publicProfile.isFollowing == true) setButtonElement(
            <a onClick={removeFollow} className={styles.profile["upper-container-button-styles-grey"]}>
                <img src="/icons/friend-added.svg" className={styles.profile["left-button-image"]} />
                <div className={styles.profile["left-button-text"]}>Mengikuti</div>
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
                {buttonElement}
            </div>
        </div>
    );
}