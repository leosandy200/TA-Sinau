import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { PageContext, PembelajaranContext } from "../../../utils/context";
import styles from "./progress-pembelajaran.module.css"

export function ProgressPembelajaran() {
    // const [pageState, ] = page;

    const {maxPage, page, isDone, evaluasi} = useContext(PembelajaranContext)
    const [maxPageState, ] = maxPage;
    const [pageState, ] = page;
    const [evaluasiState, ] = evaluasi;
    const [, setIsDoneState ] = isDone;

    useEffect(() => {
        // setIsDoneState(true);
    }, [pageState])

    return (
        <div className={styles["container-progress-bar"]}>
            <img className={styles["progress-bar-close-button"]} src="/icons/Close.svg" onClick={() => router.push("/belajar")} />
            <progress className={[styles["progress-bar-style"], (evaluasiState) ? styles["progress-bar-style-yellow"] : null].join(" ")} value={pageState} max={maxPageState}></progress>
        </div>
    )
}