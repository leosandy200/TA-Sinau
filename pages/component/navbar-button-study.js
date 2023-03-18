import React, { useContext } from "react";
import { ButtonStudy } from "./buttonStudy";
import styles from './navbar-button-study.module.css'
import { ProfileContext } from "../../utils/context";


export function NavbarButtonStudy() {

    const [dataUser, setDataUser] = useContext(ProfileContext);


    return (
        <div className={styles["container"]}>
            <h1 className={styles["logo-style"]}>SINAU</h1>
            <ButtonStudy imgsrc="/icons/home-belajar.svg" text="Belajar" link="/belajar" />
            {/* <ButtonStudy imgsrc="/img/Toko.png" text="Toko" href="/toko" /> */}
            <ButtonStudy imgsrc={dataUser.avatar} text="Profile" link={`/profile/${dataUser.namaUser}`} identifier="profile" />
            <ButtonStudy imgsrc="/icons/profile-search.svg" text="Cari Teman"  />
            <ButtonStudy imgsrc="/icons/trace.svg" text="Pengaturan" link={`/pengaturan/akun`} />
        </div>
    )
}