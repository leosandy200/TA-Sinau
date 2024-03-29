import { React, useState, useEffect, useContext, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "../styles/style.module.css";
import axios from "axios";
import Belajar from "./belajar";



const Login = () => {
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
	}, [emailOrUser, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
            const response = await axios.post(
              'https://testresfulapi.000webhostapp.com/api/login',
              ({ emailOrUser, password}),
              {
                headers: {
                  'Accept':'application/json',
                  'Content-Type':'application/x-www-form-urlencoded'},
                withCredentials: false,
              }
          );
          // const token = response?.data?.auth?.token;
          // localStorage.setItem('tokenFromStorage', token);
          // const tokenStorage = localStorage.getItem('tokenFromStorage')
          if ('token' in response?.data?.auth) {
            const tokenUser = response?.data?.auth?.token;
            localStorage.setItem('UserToken', tokenUser);
            window.location.href ="/belajar";
          } else {
            console.log("Login Failed")
          }

            // if(!tokenStorage) {
            //   return <Login/>
            // }
                    
          // const tokenStorage = localStorage.getItem('tokenFromStorage')
          // console.log(tokenStorage)    

  } catch (response) {
    if (!response) {
        console.log('No Server Response');
    } else if (response?.data?.status === 400) {
        console.log('Missing Username, Email Or Password'); 
    } else if (response?.data?.status === 401 ) {
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
        onClick={() => router.push("/register")}
      >
        DAFTAR
      </button>
      <br />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>MASUK</h1>
        <form onSubmit={handleSubmit} >
          <input
            type="text" 
            id="emailOrUser"
            onChange={(e) => setEmailOrUser(e.target.value)}
            className={styles.buttonemail}
            placeholder="Email or Username"
            value={emailOrUser}
            
          />
          <br></br>
          <input
            type="password" 
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.buttonemail}
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
          By signing in to Sinau, you agree to our <b>Terms</b> <br/> and<b> Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
};

export default Login;

