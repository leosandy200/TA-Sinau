import React from "react";
import { ButtonStudy } from "./buttonStudy";
import styles from './navbar-button-study.module.css'

export function NavbarButtonStudy() {
    return (
        <div className={styles["container"]}>
            <ButtonStudy imgsrc="/img/Belajar.png" text="Belajar" href="/belajar" />
            <ButtonStudy imgsrc="/img/Toko.png" text="Toko" href="/toko" />
        </div>
    )
}