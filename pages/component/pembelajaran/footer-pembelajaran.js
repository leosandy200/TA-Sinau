import React from "react";
import { getContext } from "../../../utils/current";
import styles from './footer-pembelajaran.module.css'

export function FooterPembelajaran() {
    const [current, setCurrent] = getContext();

    let hasil = <FooterPembelajaranStart/>
    if (current == null) hasil = <FooterPembelajaranStart/>
    else if (current >= 0) hasil = <FooterPembelajaranProgress/>
    return hasil
}

function FooterPembelajaranStart() {
    const [current, setCurrent] = getContext();

    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button className={styles["start-button"]} onClick={() => setCurrent(0)}>{`MULAI TANTANGAN +${20}XP`}</button>
        </footer>
    )
}

function FooterPembelajaranProgress() {
    const [current, setCurrent] = getContext();

    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button className={styles["start-button"]} onClick={() => setCurrent(current+1)}>Selanjutnya</button>
        </footer>
    )
}