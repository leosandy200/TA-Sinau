import React, { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/router";
import styles from "../styles/style.module.css";
import axios from "axios";

const Register = () => {
  const [namaUser, setNamaUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const router = useRouter();

  useEffect(() => { }, [namaUser, email, password, password_confirmation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://192.168.43.157:8000/api/register',
        ({ namaUser, email, password, password_confirmation }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
        }
      );
      console.log(response)


    } catch (response) {

    }
  };
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
      <div className={styles.divakun}>
        <h1 className={styles.h1buatakun}>BUAT AKUN</h1>
        <form onSubmit={handleSubmit}>
          <br></br>
          <input
            className={styles.buttonemail}
            type="text"
            id="Nama"
            placeholder="Nama"
            onChange={(e) => setNamaUser(e.target.value)}
            value={namaUser}
          />
          <br></br>
          <input
            className={styles.buttonemail}
            type="text"
            id="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <input
            className={styles.buttonemail}
            type="password"
            id="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <input
            className={styles.buttonemail}
            type="password"
            id="Konfirmasi Password"
            placeholder="Konfirmasi Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br />
          <button   
            onClick={() => router.push("/login")}
            className={styles.buttonmasuk}
            type="submit">
            Masuk
          </button>
        </form>
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
          By registering to Sinau, you agree to our <b>Terms</b> <br /> and
          <b> Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
};
export default Register;