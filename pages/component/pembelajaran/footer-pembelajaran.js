import React, { useContext, useEffect } from "react";
import { PembelajaranContext } from "../../../utils/context";
import { API } from "../../../utils/request";

import styles from './footer-pembelajaran.module.css'

function nextSession() {
    
}

export function FooterPembelajaran() {
    const [page, setPage] = useContext(PembelajaranContext).page;
    const [data, setData] = useContext(PembelajaranContext).data;

    let hasil = <FooterPembelajaranStart />
    if (page == null) hasil = <FooterPembelajaranStart />
    else if (page >= 0) hasil = <FooterPembelajaranProgress />
    return hasil
}

function FooterPembelajaranStart() {
    const [page, setPage] = useContext(PembelajaranContext).page;
    const [data, setData] = useContext(PembelajaranContext).data;

    async function nextSession() {
        try {
            const response = await API.post(`/next-soal`,
            {
            },
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            setPage(response.data.current_session);
            const Soal = response.data.Soal;
            const jawaban = response.data.Jawaban;

            setData(
                {
                    "soal": Soal,
                    "jawaban": jawaban
                }
            )
            console.log("hai");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button className={styles["start-button"]} onClick={nextSession}>{`MULAI TANTANGAN`}</button>
        </footer>
    )
}

function FooterPembelajaranProgress() {
    const [page, setPage] = useContext(PembelajaranContext).page;
    const [data, setData] = useContext(PembelajaranContext).data;

    function OnClick() {
        if (!data.returned) return;

        let returnedWord = "";
        data.returned.forEach(element => {
            if (returnedWord.length == 0) {
                returnedWord = `${element.keyword}`;
                return;
            }
            returnedWord += ` ${element.keyword}`;
        });
        console.log(returnedWord);
        (async () => {
            const response = await API.post(`/next-soal`, 
            {
                id_soal: data.Soal,
                jawaban: returnedWord,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
            )
            console.log(response);
            setPage(response.data.current_session);

            const Soal = response.data.Soal;
            const jawaban = response.data.Jawaban;

            setData(
                {
                    "soal": Soal,
                    "jawaban": jawaban
                }
            )
        })();
    }

    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button className={styles["start-button"]} onClick={() => OnClick()}>Selanjutnya</button>
        </footer>
    )
}