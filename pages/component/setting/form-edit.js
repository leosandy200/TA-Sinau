import axios from "axios";
import React, { useRef, useState, useEffect, useContext } from "react";
import styles from "../setting/form-edit.module.css"
import { FormContext, ProfileContext } from "../../../utils/context";

export const FormEdit = React.forwardRef(function ({ }, ref) {
    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);

    }, [token])

    const hiddenFileInput = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };

    return (
        <form encType="multipart/form-data" className={styles["form-element"]} ref={ref}>
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
                    placeholder={dataUser?.nama}
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Nama Pengguna</p>
                <input
                    className={styles["input-box-style"]}
                    name="namaUser"
                    type="text"
                    placeholder={dataUser?.namaUser}
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Email</p>
                <input
                    className={styles["input-box-style"]}
                    name="email"
                    type="email"
                    placeholder={dataUser?.email}
                />
            </label>
        </form>
    )
})