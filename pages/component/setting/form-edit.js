import React, { useRef } from "react";
import styles from "../setting/form-edit.module.css"

export const FormEdit = React.forwardRef(function({}, ref) {
    const hiddenFileInput = useRef(null);


    const handleClick = (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };

    return (
        <form encType="multipart/form-data" ref={ref} className={styles["form-element"]}>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Foto Profile</p>
                <button className={styles["input-button-style"]} onClick={handleClick}>Pilih Berkas</button>
                <input
                    className={styles["input-pilih-berkas"]}
                    name="avatar"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg, image/svg"
                    ref={hiddenFileInput}
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Nama</p>
                <input
                    className={styles["input-box-style"]}
                    name="nama"
                    type="text"
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Nama Pengguna</p>
                <input
                    className={styles["input-box-style"]}
                    name="namaUser"
                    type="text"
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Email</p>
                <input
                    className={styles["input-box-style"]}   
                    name="email"
                    type="email"
                />
            </label>
        </form>
    )
})