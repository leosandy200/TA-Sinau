import React, { useState, useEffect, useContext } from "react";
import { StatisticCard } from "../profile/statistic-card";
import { RedirectCard } from "./redirect-card";
import { AchievementCard } from "./achievement-card";
import profile from './lower.module.css'
import { FollowContext, ProfileContext, ProfileDataContext } from "../../../utils/context";
import { FollowList } from "./follow-list";
import { API } from "../../../utils/request";
import { AchievementContext } from "../../../utils/context";

const styles = {
    profile
}

export function LowerProfile({ streak, XP }) {

    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [publicProfile, setPublicProfile] = useContext(ProfileDataContext);
    const [selected, setSelected] = useState(null)
    const [komponenAchieve, setKomponenAchieve] = useState(null)

    useEffect(() => {
        if (!dataUser.id) return;
        (async () => {
            try {
                const achievement = await API.get(`/achievement?id=${dataUser.id}&limit=3`)
                const result = []
                achievement.data.achievement.forEach(v => {
                    result.push(<AchievementCard title={v.achievement_name} description={v.description} imgSource={v.image} XP={v.current_xp} maxValue={v.required} />)
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

    }, [dataUser])

    return (
        <div className={styles.profile["lower-container"]}>
            <div className={styles.profile["lower-container-left"]}>
                <div className={styles.profile["lower-container-content"]}>
                    <div id="statistik user">
                        <div id="text statistik" className={styles.profile[""]}>
                            <h2 className={styles.profile["statistik-text"]}>Statistik</h2>
                            <div className={styles.profile["statistik-wrapper"]}>
                                <StatisticCard title={publicProfile?.total_streak} description="Runtutan hari ini" imgSource="/icons/profile-fire.svg" />
                                <StatisticCard title={publicProfile?.xp.totalXp} description="Total XP" imgSource="/icons/petir.svg" />
                            </div>
                        </div>
                    </div>
                    <div id="achievement" className={styles.profile["pencapaian-wrapper"]}>
                        <h2 className={styles.profile["statistik-text-pencapaian"]}>Pencapaian</h2>
                        <ul className={styles.profile["pencapaian-ul"]}>
                            {komponenAchieve}
                            <a className={styles.profile["pencapaian-viewall"]}>Lihat Semua</a>
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