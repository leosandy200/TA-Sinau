import { useRouter } from "next/router";
import React from "react";
import styles from "./progress-pembelajaran.module.css"

export function ProgressPembelajaran() {
    const router = useRouter();

    return (
        <div className={styles["container-progress-bar"]}>
                <img className={styles["progress-bar-close-button"]} src="/icons/CLose.svg" onClick={() => router.push("/belajar")}/>
            <progress className={styles["progress-bar-style"]} value={3} max={20}></progress>
        </div>
    )
}