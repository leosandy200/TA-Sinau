import React from "react";
import { StatisticCard } from "../profile/statistic-card";
import { RedirectCard } from "./redirect-card";
import { AchievementCard } from "./achievement-card";
import profile from './lower.module.css'

const styles = {
    profile
}

export function LowerProfile({ XP }) {
    return (
        <div className={styles.profile["lower-container"]}>
            <div className={styles.profile["lower-container-left"]}>
                <div className={styles.profile["lower-container-content"]}>
                    <div id="statistik user">
                        <div id="text statistik" className={styles.profile[""]}>
                            <h2 className={styles.profile["statistik-text"]}>Statistik</h2>
                            <div className={styles.profile["statistik-wrapper"]}>
                                <StatisticCard title="0" description="Runtutan hari ini" imgSource="/icons/profile-fire.svg" />
                                <StatisticCard title={XP.totalXp} description="Total XP" imgSource="/icons/petir.svg" />
                            </div>
                        </div>
                    </div>
                    <div id="achievement" className={styles.profile["pencapaian-wrapper"]}>
                        <h2 className={styles.profile["statistik-text"]}>Pencapaian</h2>
                        <ul className={styles.profile["pencapaian-ul"]}>
                            <AchievementCard title="Membara" description="Capai Streak 30 Hari " imgSource="/img/Membara.svg" />
                            <AchievementCard title="Rajin" description="Selesaikan 50 Pelajaran " imgSource="/img/Membara.svg" />
                            <a className={styles.profile["pencapaian-viewall"]}>Lihat Semua</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.profile["lower-container-right"]}>
                <h2 className={styles.profile["teman-text-positioning"]}>Teman</h2>
                <RedirectCard img="/icons/profile-search.svg" description="Cari Pelajar Lainnya" title="Temukan Teman" />
                <RedirectCard img="/icons/profile-search.svg" description="Cari Pelajar Lainnya" title="Temukan Teman" />
            </div>
        </div>
    )
}