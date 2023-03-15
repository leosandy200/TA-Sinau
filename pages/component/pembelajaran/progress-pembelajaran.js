import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PembelajaranContext } from "../../../utils/context";
import styles from "./progress-pembelajaran.module.css"

export function ProgressPembelajaran() {
    const router = useRouter();

    const [page, setPage] = useContext(PembelajaranContext).page;

    return (
        <div className={styles["container-progress-bar"]}>
            <img className={styles["progress-bar-close-button"]} src="/icons/CLose.svg" onClick={() => router.push("/belajar")} />
            <progress className={styles["progress-bar-style"]} value={(!page) ? 0 : page} max={10}></progress>
        </div>
    )
}