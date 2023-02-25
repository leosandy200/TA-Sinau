import React from "react";
import styles from './footer-pembelajaran.module.css'

export function FooterPembelajaran() {
    return <FooterPembelajaranStart/>
}

function FooterPembelajaranStart() {
    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button className={styles["start-button"]}>{`MULAI TANTANGAN +${20}XP`}</button>
        </footer>
    )
}