import React from "react";
import styles from "../../styles/komponen/statistic-card.module.css"

export function AchievementCard({title, description, imgSource}) {
    return (
        <div className={styles["container"]}>
            <img className={styles["container-image"]} src={imgSource}/>
            <div className={styles["container-detail"]}>
                <p className={styles["container-detail-title"]}>{title}</p>
                <p className={styles["container-detail-description"]}>{description}</p>
            </div>
        </div>
    );
}