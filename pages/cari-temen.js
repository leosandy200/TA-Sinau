import React, { useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "styles/cari-temen.module.css";

import { NavbarButtonStudy } from "./component/navbar-button-study";
import { API } from "../utils/request";
import CardUser from "./component/cariTemen/card-user";



function CariTemen() {

    const [userElement, setUserElement] = useState([])
    const [inputValue , setInputValue] = useState(null)

    
    const cariUser = async (e) => {
        e.preventDefault();
        // <div className={styles.profile["container-loading"]} aria-busy="true"></div>

        setUserElement(<div className={styles ["container-loading"]} aria-busy="true"></div>)
        const requestHeaders = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: `application/json`
            }
        }
        
        const {data} = await API.get(`/search?s=${inputValue}`, requestHeaders);
        const array = [];
        console.log(data.data);
        data.data.forEach((value, index) => {
            array.push(<CardUser key={index} nama={value.nama} avatar={value.avatar} username={value.namaUser} identifier={value.isFollowing} idUser={value.id} />);
        })
        setUserElement(array);
        console.log(userElement);


    }

    return (
        <div className={styles["container-profile"]}>
            <NavbarButtonStudy />
            <div className={styles["container-right"]}>
                <div className={styles["container-title"]}>
                    <h1 className={styles["cari-user-title"]}>Cari User Lain</h1>
                    <form onSubmit={cariUser}>
                        {/* <span className={styles["image-style"]}>AAAA</span> */}
                        <input onChange={(e) => setInputValue(e.target.value)} minLength="3" className={styles["input-style"]} type="text" placeholder="Email, nama atau username"></input>
                        <input className={styles["input-button-hide"]} type="submit"></input>
                    </form>
                </div>
                <div className={styles["list-wrapper"]}>
                    {userElement}
                </div>
            </div>
        </div>
    )
}

export default CariTemen