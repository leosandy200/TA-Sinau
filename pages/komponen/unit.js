    import React from "react";
import styles from "../../styles/unit.module.css";
const defaultUnitItems = [
    {
        imgSrc: "/icons/belajar-locked.svg", 
        backgroundColor: "#878787",
        link: "/"
    }
]
const defaultUnitColor = "#58CC02"
const defaultUnitTitle = "Contoh Judul"
const defaultUnitDescription = "Lorem tipsum"

export function Unit ({unitColor = defaultUnitColor, unitItems = defaultUnitItems, unitTitle = defaultUnitTitle, unitDesc = defaultUnitDescription}) {
    const chapterGrids = unitItems.map((v, i) => 
        <a href={v.link}
        className={styles.chapter} 
        style={
            {backgroundColor: v.backgroundColor}
        }>
            <img src={v.imgSrc} className={styles["chapter-img"]} /> 
        </a>
    )
    return (
        <div className={styles.basecontent}>
            <div className={styles.unitbox} style={{backgroundColor: unitColor}}>
                <div className={styles["unit-button-detail"]}>
                    <p className={styles["unit-button-title"]}>{unitTitle}</p>
                    <p className={styles["unit-button-desc"]}>{unitDesc}</p>
                </div>
                <a className={styles["unit-button"]}> <img className={styles["unit-button-img"]} src="/icons/belajar-guide.svg"/> Buku Panduan</a>
            </div>
            <div className={styles["chapter-grid"]}>
                {chapterGrids}
            </div>
        </div>
    )
}