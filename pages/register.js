import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/router";
import styles from "../styles/style.module.css";

function Register() {
  const router = useRouter();
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logota}
          src="/img/LogoTA.png"
          height="20px"
          width="90px"
        />
      </header>
      <button
        className={styles.buttondaftar}
        onClick={() => router.push("/login")}
      >
        MASUK
      </button>
      <br />
      <div  className={styles.divakun}>
        <h1  className={styles.h1buatakun}>BUAT AKUN</h1>
        <form action="" method="post">
          <input
            type="text"
            className={styles.buttonemail}
            placeholder="Umur"
          />
          <br></br>
          <input
            type="text"
            className={styles.buttonemail}
            placeholder="Nama (Opsional)"
          />
          <br></br>
          <input
            type="text"
            className={styles.buttonemail}
            placeholder="Email"
          />
          <br></br>
          <input
            type="password"
            className={styles.buttonemail}
            placeholder="Password"
          />
        </form>
        <br />
        <button
          className={styles.buttonmasuk}
          onClick={() => router.push("/login")}
        >
          Masuk
        </button>
        <br />
        <div className={styles.divatau}>
          <hr className={styles.hrlogin}
          />
          <p className={styles.patau} >ATAU</p>
          <hr className={styles.hrlogin2}
          />
        </div>
        <div className={styles.divloginsosmed}
        >
          <button className={styles.buttonsosmed}>
            <img src="/img/FacebookLogin.png" style={{ marginTop: "5px" }} />
            <p className={styles.ploginsosmed}
            >
              Facebook
            </p>
          </button>
          <button
            className={styles.buttonsosmed}
            style={{ marginLeft: "20px" }}
          >
            <img src="/img/Google.png" style={{ marginTop: "5px" }} />
            <p className={styles.ploginsosmed}
            >
              Google
            </p>
          </button>
        </div>
        <p className={styles.bysigning}>
          By signing in to Duolingo, you agree to our <b>Terms</b> <br /> and
          <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
}
export default Register;
