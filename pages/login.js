import { React, useState, useEffect, useContext, useRef } from "react";
import styles from "../styles/style.module.css";
import axios from "axios";

const Login = () => {
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
		setErrMsg('');
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

          const dataUser = response;
          setEmailOrUser("");
          setPassword("");
          // setSuccess(true);
          console.log(dataUser);
  } catch (err) {
    if (!err?.response) {
          setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
          setErrMsg('Missing Username, Email Or Password'); 
    } else if (err.response?.status === 401 ) {
      setErrMsg ('Unauthorized'); 
    } else {
      setErrMsg('Login Failed');
    }
    
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
          By signing in to Duolingo, you agree to our <b>Terms</b> <br /> and
          <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
};

export default Login;

