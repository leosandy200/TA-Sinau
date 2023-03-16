import React, { useState } from "react";
import { useEffect, useContext } from "react";
import styles from '../profile/follow-list.module.css'
import { FollowProfile } from "./follow-profile";
import { API } from "../../../utils/request";
import { FollowContext, ProfileContext } from "../../../utils/context";

export function FollowList() {

    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [Follow, setFollow] = useContext(FollowContext);
    const [selected, setSelected] = useState(0)
    const [followed, setFollowed] = useState([])

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    // }
    useEffect(() => {
        const result = [];
        const maxValue = 5;
        let currentValue = 0;
        Follow[selected].forEach(value => {
            if (currentValue >= maxValue) return;

            result.push(<FollowProfile avatarUser={value[(selected) ? "followers" : "following"].avatar} namaUser={value[(selected) ? "followers" : "following"].nama} TotalXp={value[(selected) ? "followers_xp" : "following_xp"].totalXp} />)
            currentValue++;
        });
        setFollowed(result)

    }, [Follow, selected])


    return (
        <div className={styles["container"]}>
            <ul className={styles["follow-title-ul"]}>
                <li className={[styles["follow-title-list"], (selected == 0) ? styles['allow-underline'] : styles['no-underline']].join(" ")} onClick={() => setSelected(0)}>
                    <span className={styles["follow-title"]}>Following</span>
                </li>
                <li className={[styles["follow-title-list"], (selected == 1) ? styles['allow-underline'] : styles['no-underline']].join(" ")} onClick={() => setSelected(1)}>
                    <span className={styles["follow-title"]}>Followers</span>
                </li>
            </ul>
            <div>
                {followed}
                {/* <FollowProfile /> */}
            </div>
            <a className={styles["follow-viewall"]}>
                Lihat semua
            </a>
        </div>
    )
}