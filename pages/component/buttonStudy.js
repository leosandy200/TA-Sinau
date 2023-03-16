import React from "react";
import styles from '../component/button-study.module.css'
import { useRouter } from "next/router";
import Link from "next/link";

export function ButtonStudy({ imgsrc, text, link, identifier }) {

    const router = useRouter();

    return (
        <a href={link} className={(router.asPath == link) ? styles["container-active"]  : styles["container"]}>
            <img draggable={false} src={imgsrc} className={(identifier == "profile") ? styles["img-size-profile"] : styles["img-size"]} />
            <p className={styles.text}>{text}</p>
        </a>
    )
}