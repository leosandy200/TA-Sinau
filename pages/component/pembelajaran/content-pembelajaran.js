import React, { useEffect } from "react";
import { getContext } from "../../../utils/current";
import styles from './content-pembelajaran.module.css'
import { ProgressPembelajaran } from "./progress-pembelajaran";

export function ContentPembelajaran() {
    const [current, setCurrent] = getContext();
    let konten = <ContentPembelajaranStart/>;

    if (current == null) konten = <ContentPembelajaranStart/>
    else if (current == 0) konten = <ContentPembelajaranMiddle/>
    return (
        <div className={styles["container-content"]}>
            <ProgressPembelajaran/>
            {konten}
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

function ContentPembelajaranMiddle() {
    return (
        <div className={styles["container-content-start"]}>
            <h1 className={[styles["reset-margin"]].join(" ")}>Ayo Selesaikan Permainan Ini</h1>
            <p className={[styles["reset-margin"]].join(" ")}>Tunjukan apa yang kamu pelajari dan raih hadiah spesial</p>
        </div>
    )
}