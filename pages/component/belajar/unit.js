import React from "react";
import styles from "../../component/belajar/unit.module.css";
import Bab from "./bab";

export default function unit({ unitColor, unitItems, unitTitle, unitDesc, unitIndex }) {
    const chapterGrids = unitItems.map((v, i) =>
        <Bab v={v} unitLength={unitItems.length} index={i} key={i} unitIndex={unitIndex} unitColor={unitColor}/>
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