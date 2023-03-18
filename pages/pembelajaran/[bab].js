import { useRouter } from "next/router";
import React, { createContext, use, useContext, useEffect, useState } from "react";
import styles from '../../styles/pembelajaran.module.css'
import { ContentPembelajaran } from "../component/pembelajaran/content-pembelajaran";
import { FooterPembelajaran } from "../component/pembelajaran/footer-pembelajaran";
import { PembelajaranContext } from "../../utils/context";
import { API } from "../../utils/request";



export default function Pembelajaran() {
    const router = useRouter();
    const [dataPembelajaran, setDataPembelajaran] = useState(null)
    const [page, setPage] = useState(null);
    const [element, setElement] = useState(<div className={styles["container-loading"]} aria-busy="true"></div>);
    const { bab } = router.query;
    
    useEffect(() => {
        if (!bab) return;

        console.log(bab);
        (async () => {
            try {
                
                const response = await API.get(`/initial-session?bab=${bab}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
                )

                setElement(
                    <>
                        <ContentPembelajaran/>
                        <FooterPembelajaran/>
                    </>
                )

            } catch (error) {
                console.log(error);
            }
        })()

        // if (router.query.bab == null || router.query.bab == undefined) router.push("/belajar");
    }, [bab])
    return (
        <PembelajaranContext.Provider value={{
            data: [dataPembelajaran, setDataPembelajaran],
            page: [page, setPage]
        }} className={styles["container"]}>
            {element}
            
        </PembelajaranContext.Provider>
    )
}