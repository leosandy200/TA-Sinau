import React, { useState } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import styles from "../styles/style.module.css";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";

function Katasandi() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("katasandi");

  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <button
          className={styles.buttonbelajar2}
          onClick={() => router.push("/belajar")}
        >
          <img
            className={styles.imgbelajar}
            src="/img/Belajar.png"
            height="50px"
            width="50px"
          />
          <p className={styles.pbelajar}>Belajar</p>
        </button>
        <button
          className={styles.buttontoko2}
          onClick={() => router.push("/toko")}
        >
          <img
            className={styles.imgbelajar}
            src="/img/Toko.png"
            height="50px"
            width="50px"
          />
          <p className={styles.pbelajar}>Toko</p>
        </button>
      </div>
      <div className={styles.div3}>
        <h1>Kata Sandi</h1>
        <div className={styles.div23}>
          <p className={styles.namapengguna}>Kata Sandi Saat Ini :</p>
          <form action="" method="post">
            <input className={styles.input} type="text" />
          </form>
        </div>
        <div className={styles.div23}>
          <p className={styles.namapengguna}>Kata Sandi Baru :</p>
          <form action="" method="post">
            <input
              className={styles.input}
              style={{ marginLeft: "40px" }}
              type="text"
            />
          </form>
        </div>
        <Settingfooter />
      </div>
      <div className={styles.div27}>
        <button className={styles.buttonsimpanperubahan}>
          <p>Simpan Perubahan</p>
        </button>
        <br />

        <Lihatprofile />
      </div>
    </div>
  );
}
export default Katasandi;
