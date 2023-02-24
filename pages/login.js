import { React, createRef} from "react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const form = createRef();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
      
    try {   
        const responseLogin = await axios.post(
            'https://api.sinau-bahasa.my.id/login',
              formData,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                // withCredentials: false,
            }
        );

        if ('token' in responseLogin?.data?.access) {
            const tokenUser = responseLogin?.data?.access?.token;
            const idUser = responseLogin?.data?.data?.id; 

            axios.defaults.headers["Authorization"] = `Bearer ${tokenUser}`
            localStorage.setItem('data', idUser);
            localStorage.setItem('token', tokenUser);

            router.push("/belajar");

        } else {
            console.log("Login Failed")
        }
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
      <a className={styles.daftar} href="/register">DAFTAR</a>
      <div className={styles.container}>
        <h1 className={styles.h1}>MASUK</h1>
        <form onSubmit={handleSubmitLogin} ref={form} className={styles.form}>
          <input className={styles.input} placeholder="Email or username" type="text" name="emailOrUser"/>
          <input className={styles.input} placeholder="Password" type="password" name="password"/>
          <input className={styles.inputsubmit} type="submit" value="Masuk"/>
        </form>
        <p className={styles.lowertext}>By logging in to Sinau, you agree to our <b>Terms</b> and <b>Privacy Policy.</b></p>
      </div>
    </main>
    // <div>
    //   <header className={styles.header}>
    //     <img className={styles.logota} src="/img/LogoTA.png" height="20px" width="90px"/>
    //   </header>
    //   <button
    //     className={styles.buttondaftar}
    //     onClick={() => router.push("/register") }
    //   >
    //     DAFTAR
    //   </button>
    //   <br />
    //   <div style={{ textAlign: "center" }}>
    //     <h1 style={{ textAlign: "center", marginTop: "100px" }}>MASUK</h1>

    //     <form onSubmit={handleSubmitLogin}>
    //       <input
    //         type="text" 
    //         id="emailOrUser"
    //         onChange={(e) => setEmailOrUser(e.target.value)}
    //         className={styles.button}
    //         placeholder="Email or Username"
    //       />
    //       <br></br>
    //       <input
    //         type="Password"
    //         className={styles.buttonemail}
    //         id="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Password"
    //         value={password}
    //       />
    //       <br></br>
    //       <input
    //         type="submit"
    //         className={styles.buttonmasuk}
    //         value="Masuk"
    //       />
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
    //       By signing in to Sinau, you agree to our <b>Terms</b> <br /> and
    //       <b>Privacy Policy.</b>
    //     </p>
    //   </div>
    // </div>
  );
};

export default Login;
