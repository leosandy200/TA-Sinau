import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/style.module.css";

function Homepage() {
  const router = useRouter();
  return (
    <div className={styles.background}>
      <img
        className={styles.logonavbar}
        src="/img/LogoTA.png"
        height="40px"
        width="150px"
      />
      <br />

      <div className={styles.div1hp}>
        <img
          className={styles.logohome}
          src="/img/LogoHome.png"
          width="350px"
        />
        <div>
          <h2 className={styles.h2}>
            Cara Belajar Bahasa Gratis & Menyenangkan
          </h2>
          <button
            className={styles.buttonlogin}
            onClick={() => router.push("/login")}
          >
            Mulai
          </button>
          <button
            className={styles.buttonregister}
            onClick={() => router.push("/register")}
          >
            Buat Akun
          </button>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
