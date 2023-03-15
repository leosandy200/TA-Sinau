import React from "react";
import styles from "../../component/belajar/unit.module.css";
const defaultUnitItems = [
    {
        state: null,
        // imgSrc: "/icons/belajar-locked.svg",
        // backgroundColor: "#878787",
        idUnit: null
    }
]
const defaultUnitColor = "#58CC02"
const defaultUnitTitle = "Contoh Judul"
const defaultUnitDescription = "Lorem tipsum"

export function Unit({ unitColor = defaultUnitColor, unitItems = defaultUnitItems, unitTitle = defaultUnitTitle, unitDesc = defaultUnitDescription }) {
    const chapterGrids = unitItems.map((v, i) =>
        (v.state) ? 
        <a href={`/pembelajaran/${v.idUnit}`}
            className={styles.chapter}
            style={{ backgroundColor: "#58CC02"}}>
            <img src={(v.nextIdState) ? "/icons/star.svg" : "/icons/belajar-unlocked.svg"} className={styles["chapter-img"]} />
        </a>
        :
        <p
            className={[styles.chapter, styles["chapter-disable-click"]].join(" ")}
            style={{ backgroundColor: "#878787" }}>
            <img src={"/icons/belajar-locked.svg"} className={styles["chapter-img"]} />
        </p>
    )
    return (
        <div className={styles.basecontent}>
            <div className={styles.unitbox} style={{ backgroundColor: unitColor }}>
                <div className={styles["unit-button-detail"]}>
                    <p className={styles["unit-button-title"]}>{unitTitle}</p>
                    <p className={styles["unit-button-desc"]}>{unitDesc}</p>
                </div>
                <a className={styles["unit-button"]}> <img className={styles["unit-button-img"]} src="/icons/belajar-guide.svg" /> Buku Panduan</a>
            </div>
            <div className={styles["chapter-grid"]}>
                {chapterGrids}
            </div>
        </div>
    )
}