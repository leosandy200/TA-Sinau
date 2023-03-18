import React, { useState, useEffect, useContext } from "react";
import profile from './lower.module.css'
import { useRouter } from "next/router";
import Link from "next/link";
import { StatisticCard } from "../profile/statistic-card";
import { RedirectCard } from "./redirect-card";
import { AchievementCard } from "./achievement-card";
import { FollowList } from "./follow-list";
import { FollowContext, ProfileContext, ProfileDataContext } from "../../../utils/context";
import { API } from "../../../utils/request";
import { AchievementContext } from "../../../utils/context";


const styles = {
    profile
}

export function LowerProfile({ streak, XP }) {
    const router = useRouter();
    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [publicProfile, setPublicProfile] = useContext(ProfileDataContext);
    const [selected, setSelected] = useState(null)
    const [komponenAchieve, setKomponenAchieve] = useState(null)
    const { username } = router.query;

    useEffect(() => {
        if (!router.isReady) return;
        (async () => {
            try {
                const achievement = await API.get(`/achievement?namaUser=${username}&limit=3`)
                const result = []
                achievement.data.achievement.forEach((v, indecx) => {
                    result.push(<AchievementCard key={indecx} title={v.achievement_name} description={v.description} imgSource={v.image} XP={v.current_xp} maxValue={v.required} />)
                })
                setKomponenAchieve(
                    <AchievementContext.Provider value={[selected, setSelected]}>
                        {result}
                    </AchievementContext.Provider>
                )
            } catch (error) {
                console.log(error);
            }
        })()

    }, [router.isReady])

    return (
        <div className={styles.profile["lower-container"]}>
            <div className={styles.profile["lower-container-left"]}>
                <div className={styles.profile["lower-container-content"]}>
                    <div id="statistik user">
                        <div id="text statistik" className={styles.profile[""]}>
                            <h2 className={styles.profile["statistik-text"]}>Statistik</h2>
                            <div className={styles.profile["statistik-wrapper"]}>
                                <StatisticCard title={publicProfile?.streak_count} description="Runtutan hari ini" imgSource="/icons/profile-fire.svg" />
                                <StatisticCard title={publicProfile?.xp.totalXp} description="Total XP" imgSource="/icons/petir.svg" />
                            </div>
                        </div>
                    </div>
                    <div id="achievement" className={styles.profile["pencapaian-wrapper"]}>
                        <h2 className={styles.profile["statistik-text-pencapaian"]}>Pencapaian</h2>
                        <ul className={styles.profile["pencapaian-ul"]}>
                            {komponenAchieve}
                            <a className={styles.profile["pencapaian-viewall"]} href={`/profile/[${username}]/teman`}>
                            Lihat Semua
                                {/* <Link >
                                </Link> */}
                                </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.profile["lower-container-right"]}>
                <h2 className={styles.profile["teman-text-positioning"]}>Teman</h2>
                <FollowList />
                <RedirectCard img="/icons/profile-search.svg" description="Cari Pelajar Lain" title="Temukan Teman" />
            </div>
        </div>
    )
}