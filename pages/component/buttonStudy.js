import React from "react";
import styles from '../component/button-study.module.css'

export function ButtonStudy ({imgsrc, text, href}) {
    return (
        <a href={href} className={styles.container}>
            <img draggable={false} src={imgsrc} className={styles["img-size"]}/>
            <p className={styles.text}>{text}</p>
        </a>
    )
}