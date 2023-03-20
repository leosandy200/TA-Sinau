import React, { useState, useEffect } from "react";
import styles from "../cariTemen/card-user.module.css"

import Router, { useRouter } from "next/router";
import { API } from "../../../utils/request";

function CardUser({ avatar, nama, username, identifier, idUser }) {

    const router = useRouter();

    const addFollow = async () => {

        const requestHeaderFollow = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: "application/json"
            }
        }

        try {

            const addResponse = await API.get(`/follow/${idUser}`, requestHeaderFollow)
            if (addResponse.data.status == 201)
                setButtonElement()
        } catch (error) {
            console.log(error);
        }
    };

    const [buttonElement, setButtonElement] = useState(
        <button onClick={addFollow} className={styles["upper-container-button-styles"]}>
            <img src="/icons/add-user.svg" className={styles["left-button-image"]} />
            <div className={styles["left-button-text"]}>TAMBAH TEMAN</div>
        </button>)

        useEffect(() => {
        if (!router.isReady) return;

        if (identifier == true) setButtonElement(null)

    }, [router.isReady])




    return (
        <div className={styles["container"]}>
            <div className={styles["container-link"]} >
                <a href={`/profile/${username}`} className={styles["container-left"]}>
                    <div className={styles["container-profile-imgbox"]}>
                        <img className={styles["container-profile-img"]} src={(avatar) ? avatar : "/icons/profile-user.svg"} />
                    </div>
                    <div className={styles["container-profile-databox"]}>
                        <h3 className={styles["container-profile-name"]}>
                            {nama}
                        </h3>
                        <div className={styles["container-profile-username"]}>
                            {username}
                        </div>
                    </div>
                </a>
                <div className={styles["container-button-tambah-style"]}>
                {buttonElement}
                </div>
            </div>
        </div>
    )
}

export default CardUser;