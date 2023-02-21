import React from "react";
import styles from '../../styles/button-study.module.css'

export function ButtonStudy ({imgsrc, text}) {
    return (
        <div className={styles.container}>
            <img draggable={false} src={imgsrc}/>
            <p className={styles.text}>{text}</p>
        </div>
    )
}