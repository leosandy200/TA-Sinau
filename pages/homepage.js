import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/homepage.module.css";

function Homepage() {
  const router = useRouter();
  return (
    <div className={styles.background}>
      <img className={styles.logonavbar} src="/img/LogoTA.png" height="40px" width="10%"/>
      <div className={styles.div1hp}>
        <img className={styles.logohome} src="/img/LogoHome.png"/>
        <div>
          <h2 className={styles.h2}>Cara Belajar Bahasa Gratis & Menyenangkan</h2>
          <a className={styles.buttonlogin} onClick={() => router.push("/login")}>
            Mulai
          </a>
          <a className={styles.buttonregister} onClick={() => router.push("/register")}>
            Buat Akun
          </a>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
