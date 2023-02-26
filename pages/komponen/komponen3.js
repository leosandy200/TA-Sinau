import React from "react";
import styles from "../../styles/konten3.module.css";

function Komponen3({ maxVal, currentVal, titleCard }) {
  return (
    <div>
      <div className={styles.div43}>
        <h1 className={styles.h1konten2}>Pilih yang kamu dengar</h1>
        <img
          src="/img/gapaham.png"
          width="120px"
          height="100px"
          className={styles.imgkonten3}
        />
        <img
          src="/img/gapaham2.png"
          width="80px"
          height="50px"
          className={styles.imgknten3}
        />
      </div>
      <hr width="30%" />
      <div className={styles.div42}>
        <button className={styles.buttonkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
      </div>
    </div>
  );
}
export default Komponen3;