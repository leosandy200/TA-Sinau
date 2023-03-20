import { React, createRef, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";
import axios from "axios";
import { ProfileContext } from "../utils/context";

const Login = () => {
  const router = useRouter();
  const form = createRef();
  const [dataUser, setDataUser] = useContext(ProfileContext);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    try {
      const responseLogin = await axios.post(
        'https://api.sinau-bahasa.my.id/login',
        formData,
        {
          maxRedirects: 100,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          // withCredentials: false,
        }
      );

      if (responseLogin?.data?.status == 200) {
        const tokenUser = responseLogin?.data?.access?.token;
        const dataUser = responseLogin?.data?.data;

        console.log(dataUser)

        axios.defaults.headers["Authorization"] = `Bearer ${tokenUser}`
        localStorage.setItem('data', JSON.stringify(dataUser));
        localStorage.setItem('token', tokenUser);

        setDataUser(dataUser);
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
    <div className={styles.container}>
      <a className={styles.daftar} href="/register">DAFTAR</a>
      <div className={styles["container-form"]}>
        <h1 className={styles.h1}>MASUK</h1>
        <form onSubmit={handleSubmitLogin} ref={form} className={styles.form}>
          <input className={styles.input} placeholder="Email or username" type="text" autoComplete="off" name="emailOrUser" />
          <input className={styles.input} placeholder="Password" type="password" autoComplete="off" name="password" />
          <input className={styles.inputsubmit} type="submit" value="MASUK" />
        </form>
        <p className={styles.lowertext}>By logging in to Sinau, you agree to our <b>Terms</b> and <b>Privacy Policy.</b></p>
      </div>
    </div>
  );
};

export default Login;
