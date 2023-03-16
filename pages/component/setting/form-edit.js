import axios from "axios";
import React, { useRef, useState, useEffect, useContext } from "react";
import styles from "../setting/form-edit.module.css"
import { FormContext, ProfileContext } from "../../../utils/context";

export const FormEdit = React.forwardRef(function ({ }, ref) {
    const [dataUser, setDataUser] = useContext(ProfileContext);
    const [token, setToken] = useState(null);
    const [selected, setSelected] = useState(null)

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelected(e.target.files[0])
        }
    }



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
                <div className={styles["file-container"]}>
                    <button className={styles["input-button-style"]} onClick={handleClick}>Pilih File</button>
                    <input
                        className={styles["input-pilih-berkas"]}
                        name="avatar"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        ref={hiddenFileInput}
                        onChange={imageChange}
                    />
                    {selected && (
                        <img className={styles["img-test"]}
                            src={URL.createObjectURL(selected)}
                        />
                    )
                    }
                </div>
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Nama</p>
                <input
                    className={styles["input-box-style"]}
                    name="nama"
                    type="text"
                    defaultValue={dataUser?.nama}
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Username</p>
                <input
                    className={styles["input-box-style"]}
                    name="namaUser"
                    type="text"
                    defaultValue={dataUser?.namaUser}
                />
            </label>
            <label className={styles["container-label"]}>
                <p className={styles["input-button-teks"]}>Email</p>
                <input
                    className={styles["input-box-style"]}
                    name="email"
                    type="email"
                    defaultValue={dataUser?.email}
                />
            </label>
        </form>
    )
})