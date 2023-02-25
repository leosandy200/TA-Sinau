import React, { useState } from "react";
import styles from '../styles/pembelajaran.module.css'
import { ContentPembelajaran } from "./component/pembelajaran/content-pembelajaran";
import { FooterPembelajaran } from "./component/pembelajaran/footer-pembelajaran";

export const states = {
    // current: useState(0)
}

export default function Pembelajaran() {
    const [currentSession, setCurrentSession] = useState(null)

    return (
        <div className={styles["container"]}>
            <ContentPembelajaran/>
            <FooterPembelajaran/>
        </div>
    )
}