import axios from "axios";
import styles from '../styles/belajar.module.css';

export const API = axios.create({
    baseURL: "https://api.sinau-bahasa.my.id"
});

export async function getAllMapel([tokenUser, setTokenUser], [middleKomponen, setMiddleKomnponen]) {
    const token = localStorage.getItem('token');
    // setTokenUser(token);

    try {
        // const res = await axios.get("https://api.sinau-bahasa.my.id/mapel", {
        //     params: {"mapel": "jawa"},
        //     headers: {'Authorization': `Bearer ${tokenUser}`,}
        // })
    } catch (error) {
        // setMiddleKomnponen(<div className={styles["error-text"]}><h1>Sorry, there is a problem</h1></div>);
    }

    // .then(res => {
    //   const result = []
    //   res.data.forEach(v => {
    //     const babItems = []
    //     v.unit_bab.forEach(
    //       v => babItems.push(
    //         {
    //           link: v.url,
    //           imgSrc: "/icons/belajar-locked.svg",
    //           backgroundColor: "#878787"
    //         }
    //       )
    //     )
    //     result.push(<Unit unitTitle={`Unit ${v.unit}`} unitDesc={v.description} unitItems={babItems} />)
    //   })
    //   setMiddleKomnponen(result)
    // }).catch(err => {
    //   if (err) 
    // })
  }