import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { PageContext, PembelajaranContext, SessionContext } from "../../../utils/context";
import { API } from "../../../utils/request";

import styles from './footer-pembelajaran.module.css'

export function FooterPembelajaran() {
    const { page, maxPage, isDone } = useContext(PembelajaranContext)
    const [pageState, ] = page 
    const [maxPageState, ] = maxPage 
    const [isDoneState, ] = isDone 
    if (pageState == null) return <FooterPembelajaranStart />
    else if (isDoneState) return <FooterPembelajaranEnd />
    else if (pageState >= 0) return <FooterPembelajaranProgress />
}

function FooterPembelajaranStart() {
    const instance = useRef();

    const { page, allowNext } = useContext(PembelajaranContext)
    const [ ,setAllowNext ] = allowNext
    const [pageState, setPageState] = page 
    
    async function nextSession() {
        instance.current.setAttribute("aria-busy", true);
        instance.current.innerHTML = null;

        setPageState(0)
        setAllowNext(true)
    }
    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button ref={instance} className={styles["start-button"]} onClick={nextSession}>{`MULAI TANTANGAN`}</button>
        </footer>
    )
}

function FooterPembelajaranEnd() {
    const instance = useRef();
    const router = useRouter();

    const { page, allowNext } = useContext(PembelajaranContext)
    const [ ,setAllowNext ] = allowNext
    const [pageState, setPageState] = page 
    
    async function nextSession() {
        instance.current.setAttribute("aria-busy", true);
        instance.current.innerHTML = null;

        router.push("/belajar")
    }

    return (
        <footer className={[styles["container"], styles["start"]].join(' ')}>
            <button ref={instance} className={styles["start-button"]} onClick={nextSession}>{`Selesaikan Pelajaran`}</button>
        </footer>
    )
}

function FooterPembelajaranProgress() {
    const instance = useRef();
    const instanceParent = useRef();
    const [ soalBefore, setSoalBefore ] = useState(null)

    const { 
        jawabanTemp, 
        soal, 
        jawaban, 
        page, 
        actualPage, 
        evaluasi, 
        allowNext,
        isDone, 
        maxPage,
        endScore,
        exp
    } = useContext(PembelajaranContext)
    const [ jawabanTempState,  ] = jawabanTemp
    const [ maxPageState,  ] = maxPage
    const [ soalState, setSoalState ] = soal
    const [ ,setJawabanState ] = jawaban
    const [ allowNextState ,setAllowNext ] = allowNext
    const [ ,setActualPageState ] = actualPage
    const [ pageState ,setPageState ] = page
    const [ evaluasiState , setEvaluasiState ] = evaluasi
    const [ , setIsDoneState ] = isDone
    const [ , setEndScoreState ] = endScore
    const [ , setExpState ] = exp

    function AfterClick() {
        if (pageState >= maxPageState) {
            setIsDoneState(true)
            setAllowNext(true)
            return
        }
        setAllowNext(true)
        setSoalBefore(null)
    }
    
    function OnClick() {
        if (!instance.current.innerHTML) return;
        instance.current.setAttribute("aria-busy", true);
        instance.current.innerHTML = null;

        let returnedWord = "";
        jawabanTempState.forEach(element => {
            if (returnedWord.length == 0) {
                returnedWord = `${element.keyword}`;
                return;
            }
            returnedWord += ` ${element.keyword}`;
        });

        (async () => {
            const {data} = await API.post(`/next-soal`, 
            {
                "id_soal": soalState.id,
                "jawaban": returnedWord,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
            )
            
            
            const { evaluasi, current_session, soal, jawaban, score_akhir, xp } = data
            
            if (score_akhir == undefined || score_akhir == null) {
                setJawabanState(jawaban);
                setActualPageState(current_session)
                setSoalState(soal)
                setEvaluasiState((evaluasi) ? true : false)
    
                instance.current.setAttribute("aria-busy", false);
                setSoalBefore(data.soal_before == "benar")
            } else {
                
                setEndScoreState(score_akhir)
                setExpState(xp.xpHarian)
                setActualPageState(maxPageState)
                setSoalBefore(data.soal_before == "benar")
                instance.current.setAttribute("aria-busy", false);
            }

        })();
    }

    useEffect(() => {
        if (soalBefore == null) {
            instance.current.innerHTML = "Selanjutnya";
            instanceParent.current.style.backgroundColor = "transparent"
            instance.current.style.backgroundColor = "#61E002"
            return
        }

        if (soalBefore) {
            instance.current.innerHTML = "Benar";
            instanceParent.current.style.backgroundColor = "#D7FFB8"
            instance.current.style.backgroundColor = "#61E002"
            setPageState(pageState+1)
        } else {
            instance.current.innerHTML = "Salah";
            instanceParent.current.style.backgroundColor = "#FFDFE0"
            instance.current.style.backgroundColor = "#FF4B4B"
            setPageState(pageState+0)
        }
    }, [soalBefore])

    return (
        <footer className={[styles["container"], styles["start"]].join(' ')} ref={instanceParent}>
            <button ref={instance} className={styles["start-button"]} onClick={() => (soalBefore == null) ? OnClick() : AfterClick()}>Selanjutnya</button>
        </footer>
    )
}