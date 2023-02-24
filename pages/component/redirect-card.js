import React from "react";
import styles from '../../styles/komponen/redirect-card.module.css'

export function RedirectCard({img, title, description}) {
    return (
        <a className={styles["container"]}>
            <img draggable={false} src={img} className={styles["container-image"]}/>
            <div className={styles["container-texts"]}>
                <p className={styles["container-texts-highlight"]}>{title}</p>
                <p className={styles["container-texts-description"]}>{description}</p>
            </div>
            <img draggable={false} src="/icons/profile-right-arrow.svg" className={styles["container-redirect"]}/>
        </a>
    )
}