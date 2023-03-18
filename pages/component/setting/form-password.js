import React, { useRef, useState, useEffect, useContext } from "react"
import styles from "../setting/form-password.module.css"
export const FormPassword = React.forwardRef(function ({ }, ref) {



    return (
        <form encType="multipart/form-data" className={styles["form-element"]} ref={ref}>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Kata Sandi Lama</p>
                <input
                    className={styles["input-box-style"]}
                    name="current_password"
                    type="password"
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Kata Sandi Baru</p>
                <input
                    className={styles["input-box-style"]}
                    name="new_password"
                    type="password"
                />
            </label>
        </form>
    )
})