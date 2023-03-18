import React, { useEffect, useContext, createContext, useState } from "react";
import { useRouter } from "next/router";
import styles from "/styles/teman.module.css";
import { ListTemen } from "../../component/profile/list-temen";
import { NavbarButtonStudy } from "../../component/navbar-button-study";
import { FollowersContext, FollowingContext } from "../../../utils/context";
import { API } from "../../../utils/request";


function Teman() {
    const router = useRouter();
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const { username } = router.query;

    useEffect(() => {
        if (!router.isReady) return;

        (async () => {
            try {

                const Followers = await API.get(`/followers/${username}?limit=`);
                const Following = await API.get(`/following/${username}?limit=`);

                if (!Followers && !Following) return;

                const FollowingAmount = Following.data.data;
                const FollowersAmount = Followers.data.data;

                setFollowers(FollowersAmount);
                setFollowing(FollowingAmount);

                // console.log(followers, following);

            } catch (error) {
                console.log(error);
            }
        })()


    }, [router.isReady])


    return (
        <div className={styles["container-profile"]}>
            <NavbarButtonStudy />
            <div className={styles["container-right"]}>
                <FollowersContext.Provider value={[followers, setFollowers]}>
                    <FollowingContext.Provider value={[following, setFollowing]}>
                        <ListTemen />
                    </FollowingContext.Provider>
                </FollowersContext.Provider>
            </div>
        </div >
    );
}

export default Teman;