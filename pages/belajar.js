import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ButtonStudy } from './komponen/buttonStudy';
import { Unit } from './komponen/unit';
import { CardXp } from './komponen/cardProgressXp';
import styles from '../styles/belajar.module.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import axios from 'axios';

function Belajar() {
  const router = useRouter();
  // const [open, setOpen] = useState(false);
  // const [isOpenKonten, setIsOpenKonten] = useState(false);

  const [middleKomponen, setMiddleKomnponen] = useState(<div className={styles["container-loading"]} aria-busy="true"></div>);
  let tokenUser = '';

  
  useEffect(() => async () => {
    tokenUser = localStorage.getItem('token');

    try {
      const res = await axios.get("https://api.sinau-bahasa.my.id/mapel", {
        params: {"mapel": "jawa"}, headers: {'Authorization': `Bearer ${tokenUser}`,}
      })
      const result = []
      res.data.forEach(v => {
        const babItems = []
        v.unit_bab.forEach(
          v => babItems.push(
            {
              link: v.url,
              imgSrc: "/icons/belajar-locked.svg",
              backgroundColor: "#878787"
            }
          )
        )
        result.push(<Unit unitTitle={`Unit ${v.unit}`} unitDesc={v.description} unitItems={babItems} />)
      })
      setMiddleKomnponen(result)
    } catch (error) {
      setMiddleKomnponen(<div className={styles["error-text"]}><h1>Sorry, there is a problem</h1></div>);
    }
  }, [tokenUser])

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <ButtonStudy imgsrc="/img/Belajar.png" text="Belajar" href="/belajar"/>
        <ButtonStudy imgsrc="/img/Toko.png" text="Toko" href="/toko"/>
      </div>
      <div className={styles.containerCenter}>
        {middleKomponen}
      </div>
      <div className={styles["container-right"]}>
        <CardXp maxVal={24} currentVal={4} titleCard="Progress XP" />
      </div>
    </div>
  )
}
export default Belajar;
