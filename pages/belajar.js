import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/belajar.module.css';
import { Unit } from './component/belajar/unit';
import { NavbarButtonStudy } from './component/navbar-button-study';
import { CardXp } from './component/belajar/cardProgressXp';
import { BelajarContext } from '../utils/context';
import { API } from '../utils/request';

function Belajar() {
  const router = useRouter();
  const [selected, setSelected] = useState(null)
  const [middleKomponen, setMiddleKomnponen] = useState(<div className={styles["container-loading"]} aria-busy="true"></div>);
  let tokenUser = '';


  useEffect(() => async () => {
    tokenUser = localStorage.getItem('token');

    try {
      const res = await API.get("/mapel", {
        params: { "mapel": "jawa" }, headers: { 'Authorization': `Bearer ${tokenUser}`, }
      })
      const result = []
      res.data.forEach(v => {
        console.log(v);
        const babItems = []
        if (!v.unit_bab) {
          // result.push(<Unit unitTitle={`Unit ${v.unit}`} unitDesc={v.description} unitItems={[]} />)
          return
        };
        v.unit_bab.forEach(
          (value, i) => babItems.push(
            {
              idUnit: value.id,
              state: value.isUnlocked,
              nextIdState: (i+1 != v.unit_bab.length) ? v.unit_bab[i+1].isUnlocked : null
            }
          )
        )
        
        result.push(<Unit unitTitle={`Unit ${v.unit}`} unitDesc={v.description} unitItems={babItems} />)
      })
      setMiddleKomnponen(
        <BelajarContext.Provider value={[selected, setSelected]}>
          {result}
        </BelajarContext.Provider>
      )
    } catch (error) {
      console.error(error);
      setMiddleKomnponen(<div className={styles["error-text"]}><h1>Sorry, there is a problem</h1></div>);
    }
  }, [tokenUser])

  return (
    <div className={styles.container}>
      <NavbarButtonStudy />
      <div className={styles.containerCenter}>
        {middleKomponen}
      </div>
      <div className={styles["container-right"]}>
        <CardXp maxVal={24} currentVal={0} titleCard="Progress XP" />
      </div>
    </div>
  )
}
export default Belajar;
