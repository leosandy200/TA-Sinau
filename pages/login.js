import { React, useState, useEffect} from "react";
import { useRouter } from "next/router";
import styles from "../styles/style.module.css";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
	}, [emailOrUser, password]);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
      
    try {   
        const responseLogin = await axios.post(
            'https://api.sinau-bahasa.my.id/api/login',
            ({ emailOrUser, password }),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: false,
            }
        );
        // console.log(responseLogin)
        // const token = response?.data?.auth?.token;
        // localStorage.setItem('tokenFromStorage', token);
        // const tokenStorage = localStorage.getItem('tokenFromStorage')
        if ('token' in responseLogin?.data?.access) {
            const tokenUser = responseLogin?.data?.access?.token;
            const idUser = responseLogin?.data?.data?.id; 

            localStorage.setItem('token',tokenUser);
            localStorage.setItem('data', idUser);

            router.push("/belajar");

        } else {
            console.log("Login Failed")
        }

    } catch (responseLogin) {

        if (!responseLogin) {
            console.log('No Server Response');
        } else if (responseLogin?.data?.status === 400) {
            console.log('Missing Username, Email Or Password');
        } else if (responseLogin?.data?.status === 401) {
            console.log('Unauthorized');
        } else {
            console.log('Login Failed');
        }
    };

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
        onClick={() => router.push("/register") }
      >
        DAFTAR
      </button>
      <br />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>MASUK</h1>

        <form onSubmit={handleSubmitLogin}>
          <input
            type="text" 
            id="emailOrUser"
            onChange={(e) => setEmailOrUser(e.target.value)}
            className={styles.buttonemail}
            placeholder="Email or Username"
          />
          <br></br>
          <input
            type="Password"
            className={styles.buttonemail}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
          <br></br>
          <button
            type="submit"
            className={styles.buttonmasuk}>
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
          By signing in to Sinau, you agree to our <b>Terms</b> <br /> and
          <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
