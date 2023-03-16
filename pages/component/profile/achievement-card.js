import React from "react";
import styles from "../profile/achievement.module.css"

export function AchievementCard({ title, description, imgSource, XP ,maxValue }) {
    return (
        <div className={styles["container-pencapaian"]}>
            <img className={styles["container-image"]} src={imgSource} />
            <div className={styles["container-detail"]}>
                <p className={styles["container-detail-title"]}>{title}</p>
                <progress value={XP} max={maxValue} className={styles["progress-style"]}></progress>
                <p className={styles["container-detail-description"]}>{description}</p>
            </div>
        </div>
    );
}