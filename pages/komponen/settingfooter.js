import React, { useState } from "react";
import styles from "../../styles/style.module.css";

function Settingfooter() {
  return (
    <div>
      <div className={styles.div25}>
        <p className={styles.tentang}>Tentang</p>
        <p className={styles.tentang}>Sekolah</p>
        <p className={styles.tentang}>Aplikasi</p>
        <p className={styles.tentang}>Toko</p>
        <p className={styles.tentang}>Efikasi</p>
        <p className={styles.tentang}>Bantuan</p>
      </div>
      <div className={styles.div26}>
        <p className={styles.tentang}>Panduan </p>
        <p className={styles.tentang}>Karier</p>
        <p className={styles.tentang}>Invertor</p>
        <p className={styles.tentang}>Ketentuan</p>
        <p className={styles.tentang}>Privasi</p>
      </div>
    </div>
  );
}
export default Settingfooter;
