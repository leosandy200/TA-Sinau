import React, { useContext, useEffect, useState } from "react";
import styles from '../profile/list-temen.module.css';
import { CardTemen } from "./card-temen";
import { FollowersContext, FollowingContext } from "../../../utils/context";
import { useRouter } from "next/router";



export function ListTemen() {
    // const router = useRouter();

    const [Followers, setFollowers] = useContext(FollowersContext);
    const [Following, setFollowing] = useContext(FollowingContext);
    const [selected, setSelected] = useState(0);
    const [followed, setFollowed] = useState(<div className={styles["container-loading"]} aria-busy="true"></div>);

    useEffect(() => {
        const result = [];
        if (!selected) {
            Followers.forEach((value, index) => {

                result.push(<CardTemen index={index} key={index} avatarUser={value.followers.avatar} nama={value.followers.nama} TotalXp={value.followers_xp.totalXp} username={value.followers.namaUser} />)

            });

        } else {
            Following.forEach((value, index) => {

                result.push(<CardTemen index={index} key={index} avatarUser={value.following.avatar} nama={value.following.nama} TotalXp={value.following_xp.totalXp} username={value.following.namaUser} />)

            });
        }
        setFollowed(result)
    }, [selected, Followers, Following])


    return (
        <div id="container" className={styles["container-wrapper"]} >
            <div className={styles["container-container"]} >
                <div id="title container" className={styles["teman-title-container"]}>
                    <h2 className={styles["teman-title"]} >Semua Teman</h2>
                </div>
                <div className={styles["container"]}>
                    <ul className={styles["follow-title-ul"]}>
                        <li className={[styles["follow-title-list"], (selected == 0) ? styles["allow-underline"] : styles["no-underline"]].join(" ")} onClick={() => setSelected(0)}>
                            <span className={styles["follow-title"]} >Pengikut </span>
                        </li>
                        <li className={[styles["follow-title-list"], (selected == 1) ? styles["allow-underline"] : styles["no-underline"]].join(" ")} onClick={() => setSelected(1)}>
                            <span className={styles["follow-title"]} >Mengikuti </span>
                        </li>
                    </ul>
                    <div>
                        {followed}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}