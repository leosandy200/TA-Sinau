import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, use, useContext, useEffect, useState } from "react";
import styles from '../../styles/pembelajaran.module.css'
import { ContentPembelajaran } from "../component/pembelajaran/content-pembelajaran";
import { FooterPembelajaran } from "../component/pembelajaran/footer-pembelajaran";
import { CurrentProvider } from "../../utils/current";



export default function Pembelajaran() {
    // const router = useRouter();
    
    // useEffect(() => {

    //     console.log(router.query);
    //     if (router.query.bab == null || router.query.bab == undefined) router.push("/belajar");
    // }, [])
    return (
        <CurrentProvider className={styles["container"]}>
            <ContentPembelajaran/>
            <FooterPembelajaran/>
        </CurrentProvider>
    )
}