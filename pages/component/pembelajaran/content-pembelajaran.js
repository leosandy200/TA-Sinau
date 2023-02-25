import React from "react";
import { states } from "../../pembelajaran";
import styles from './content-pembelajaran.module.css'
import { ProgressPembelajaran } from "./progress-pembelajaran";

export function ContentPembelajaran() {
    // states.current[1](0)

    return (
        <div className={styles["container-content"]}>
            <ProgressPembelajaran/>
            <ContentPembelajaranStart/>
        </div>
    )
}

function ContentPembelajaranStart() {
    return (
        <div className={styles["container-content-start"]}>
            <h1 className={[styles["reset-margin"]].join(" ")}>Ayo Selesaikan Level Ini</h1>
            <p className={[styles["reset-margin"]].join(" ")}>Tunjukan apa yang kamu pelajari dan raih hadiah spesial</p>
        </div>
    )
}