import React from "react";
import styles from '../../component/belajar/card-xp.module.css'

export function CardXp ({maxVal, currentVal, titleCard}) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.title}>{titleCard}</p>
                <a className={styles.edit}>Edit Target</a>
            </div>
            <div className={styles["bottom-box"]}>
                <img className={styles["bottom-box-image"]} src="/img/Harta Karun.png"/>
                <div className={styles["progress-box"]}>
                    <p className={styles["progress-box-text"]}>Target Harian</p>
                    <progress className={styles["progress-box-bar"]} value={currentVal} max={maxVal}/>
                </div>
                <p className={styles["bottom-box-text"]}>{`${currentVal} / ${maxVal}`}</p>
            </div>
        </div>
    )
}