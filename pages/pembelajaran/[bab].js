import { useRouter } from "next/router";
import React, { createContext, use, useContext, useEffect, useState } from "react";
import styles from '../../styles/pembelajaran.module.css'
import { ContentPembelajaran, ContentPembelajaranEnd, ContentPembelajaranPlay, ContentPembelajaranStart } from "../component/pembelajaran/content-pembelajaran";
import { FooterPembelajaran } from "../component/pembelajaran/footer-pembelajaran";
import { ActualPageContext, PageContext, PembelajaranContext, SessionContext } from "../../utils/context";
import { API } from "../../utils/request";
import { ProgressPembelajaran } from "../component/pembelajaran/progress-pembelajaran";
import Head from "next/head";



export default function Pembelajaran() {
    const router = useRouter();
    // const [dataPembelajaran, setDataPembelajaran] = useState(null)
    // const [page, setPage] = useState(0);
    // const [actualPage, setActualPage] = useState(0);
    const [element, setElement] = useState(<div className={styles["container-loading"]} aria-busy="true"></div>);
    const { bab } = router.query;

    const pembelajaran = 
    {
        actualPage: useState(0),
        exp: useState(0),
        endScore: useState(0),
        page: useState(null),
        maxPage: useState(0),
        soal: useState(null),
        allowNext: useState(false),
        jawaban: useState(null),
        jawabanTemp: useState([]),
        evaluasi: useState(false),
        isDone: useState(false),
    }
    
    useEffect(() => {
        if (!router.isReady) return;

        (async () => {
            try {
                
                const { data } = await API.get(`/initial-session?bab=${bab}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
                )

                const { current_session, max_session, soal, jawaban } = data

                const [ ,setJawabanState ] = pembelajaran.jawaban
                const [ ,setMaxPageState ] = pembelajaran.maxPage
                const [ ,setActualPageState ] = pembelajaran.actualPage
                const [ ,setSoalState ] = pembelajaran.soal
                setJawabanState(jawaban);
                setMaxPageState(max_session);
                setActualPageState(current_session)
                setSoalState(soal)

                setElement(
                <>
                    <ContentPembelajaranStart/>
                    <FooterPembelajaran/>
                </>
                )

            } catch (error) {
                console.log(error);
            }
        })()
    }, [router.isReady])

    useEffect(() => {
        if (!router.isReady) return;
        if (pembelajaran.page[0] == null) return;
        if (!pembelajaran.allowNext[0]) return;
        if (pembelajaran.isDone[0]) {
            <>
                <ProgressPembelajaran/>
                <ContentPembelajaranEnd score_akhir={pembelajaran.endScore[0]} xp={pembelajaran.exp[0]}/>
                <FooterPembelajaran/>
            </>
            return
        }
        setElement(
            <>
                <ProgressPembelajaran/>
                <ContentPembelajaranPlay soal={pembelajaran.soal[0]} jawaban={pembelajaran.jawaban[0]}/>
                <FooterPembelajaran/>
            </>
        )
        pembelajaran.allowNext[1](false);
    }, [pembelajaran.allowNext[0], router.isReady])
    
    return (
        <PembelajaranContext.Provider value={pembelajaran}>
            {element}
        </PembelajaranContext.Provider>
        // <ActualPageContext.Provider value={[actualPage, setActualPage]}>
        //     <PageContext.Provider value={[page, setPage]}>
        //         <SessionContext.Provider value={[dataPembelajaran, setDataPembelajaran]}>
        //         </SessionContext.Provider>
        //     </PageContext.Provider>
        // </ActualPageContext.Provider>
    )
}