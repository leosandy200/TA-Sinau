import React, { useEffect, useState, createRef } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useRouter } from "next/router";
import styles from "../styles/register.module.css";
import axios from "axios";

const Register = () => {

  const router = useRouter();

  const form = createRef();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    try {
      const responseRegister = await axios.post(
        'https://api.sinau-bahasa.my.id/register',
        formData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            
          },
        }
      );
      console.log(responseRegister)
      router.push("/login");
    } catch (error) {
      if (!error) return;
      switch (error.data?.status) {
        case 400:
          console.log('Missing Username, Email Or Password');
          return;
        case 401:
          console.log('Unauthorized');
          return;
        default:
          console.log('No Server Response');
          return;
      }
    };
  };

  return (
    <main className={styles.main}>
      <a className={styles.masuk} href="/login">MASUK</a>
      <div className={styles.container}>
        <h1 className={styles.h1}>DAFTAR</h1>
        <form className={styles.form} onSubmit={handleSubmitRegister} ref={form}>
          <input className={styles.input} placeholder="Username" type="text" autoComplete="off" name="namaUser" /> 
          <input className={styles.input} placeholder="Email" type="text" autoComplete="off" name="email" />
          <input className={styles.input}placeholder="Password" type="password" name="password" />
          <input className={styles.input} placeholder="Konfirmasi Password" type="password" name="password_confirmation"/>
          <input className={styles.inputsubmit} type="submit" value="DAFTAR"/>
        </form>
        <p className={styles.lowertext}>By signing up to Sinau, you agree to our <b>Terms</b> and <b>Privacy Policy.</b></p>
      </div>
    </main>
    //
    //  <div> 
    // //   <button
    //     className={styles.buttondaftar}
    //     onClick={() => router.push("/login")}
    //   >
    //     MASUK
    //   </button>
    //   <br />
    //   <div className={styles.divakun}>
    //     <h1 className={styles.h1buatakun}>BUAT AKUN</h1>
    //     <form onSubmit={handleSubmitRegister}>
    //       <br></br>
    //       <input
    //         className={styles.buttonemail}
    //         type="text"
    //         id="Nama"
    //         placeholder="Nama"
    //         onChange={(e) => setNamaUser(e.target.value)}
    //         value={namaUser}
    //       />
    //       <br></br>
    //       <input
    //         className={styles.buttonemail}
    //         type="text"
    //         id="Email"
    //         placeholder="Email"
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //       />
    //       <br></br>
    //       <input
    //         className={styles.buttonemail}
    //         type="password"
    //         id="Password"
    //         placeholder="Password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <br></br>
    //       <input
    //         className={styles.buttonemail}
    //         type="password"
    //         id="Konfirmasi Password"
    //         placeholder="Konfirmasi Password"
    //         onChange={(e) => setPasswordConfirmation(e.target.value)}
    //       />
    //       <br />
    //       <button
    //         onClick={() => router.push("/login")}
    //         className={styles.buttonmasuk}
    //         type="submit">
    //         Masuk
    //       </button>
    //     </form>
    //     <div className={styles.divatau}>
    //       <hr className={styles.hrlogin}
    //       />
    //       <p className={styles.patau} >ATAU</p>
    //       <hr className={styles.hrlogin2}
    //       />
    //     </div>
    //     <div className={styles.divloginsosmed}
    //     >
    //       <button className={styles.buttonsosmed}>
    //         <img src="/img/FacebookLogin.png" style={{ marginTop: "5px" }} />
    //         <p className={styles.ploginsosmed}
    //         >
    //           Facebook
    //         </p>
    //       </button>
    //       <button
    //         className={styles.buttonsosmed}
    //         style={{ marginLeft: "20px" }}
    //       >
    //         <img src="/img/Google.png" style={{ marginTop: "5px" }} />
    //         <p className={styles.ploginsosmed}
    //         >
    //           Google
    //         </p>
    //       </button>
    //     </div>
    //     <p className={styles.bysigning}>
    //       By registering to Sinau, you agree to our <b>Terms</b> <br /> and
    //       <b> Privacy Policy.</b>
    //     </p>
    //   </div>
    // </div>
  );
};
export default Register;