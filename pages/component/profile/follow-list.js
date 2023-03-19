import React, { useState, useEffect, useContext } from "react";
import styles from '../profile/follow-list.module.css'
import { useRouter } from "next/router";
import { FollowProfile } from "./follow-profile";
import { API } from "../../../utils/request";
import { ProfileContext, FollowersContext, FollowingContext } from "../../../utils/context";

export function FollowList() {
    const router = useRouter();
    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [Followers, setFollowers] = useContext(FollowersContext);
    const [Following, setFollowing] = useContext(FollowingContext);
    const [selected, setSelected] = useState(0);
    const [followed, setFollowed] = useState(<div className={styles["container-loading"]} aria-busy="true"></div>);

    const { username } = router.query;

    // <div className={styles["container-loading"]} aria-busy="true"></div>

    useEffect(() => {
        const result = [];
        if (!selected) {
            Followers.forEach((value, index) => {
                result.push(<FollowProfile index={index} key={index} avatarUser={value.followers.avatar} nama={value.followers.nama} TotalXp={value.followers_xp.totalXp} username={value.followers.namaUser} identifier={Followers.length}/>)
            });

        } else {
            Following.forEach((value, index) => {
                result.push(<FollowProfile index={index} key={index} avatarUser={value.following.avatar} nama={value.following.nama} TotalXp={value.following_xp.totalXp} username={value.following.namaUser} identifier={Following.length}/>)
            });
        }
        setFollowed(result.slice(0, 5))

    }, [selected, Followers, Following])

    const followersList = function () {
        if (!selected) {

            return (Followers.length > 5) ? (
                <a href={`/profile/${username}/teman`} className={styles["follow-viewall-border"]}>
                    Lihat semua
                </a>
            ) : null;
        } else {

            return (Following.length > 5) ? (
                <a href={`/profile/${username}/teman`} className={styles["follow-viewall-border"]}>
                    Lihat semua
                </a>
            ) : null;
        }
    }();

    return (
        // [(Followers.length > 5 && Following.length > 5 ) ? styles["container"] : styles["container-noborder"]]
        <div className={styles["container"]}>
            <ul className={styles["follow-title-ul"]}>
                <li className={[styles["follow-title-list"], (selected == 0) ? styles['allow-underline'] : styles['no-underline']].join(" ")} onClick={() => setSelected(0)}>
                    <span className={styles["follow-title"]}>Pengikut</span>
                </li>
                <li className={[styles["follow-title-list"], (selected == 1) ? styles['allow-underline'] : styles['no-underline']].join(" ")} onClick={() => setSelected(1)}>
                    <span className={styles["follow-title"]}>Mengikuti</span>
                </li>
            </ul>
            <div>
                {followed}
            </div>
            {followersList}
        </div>
    )
}