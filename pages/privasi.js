import React, { useState } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Switch from "@mui/material/Switch";
import styles from "../styles/style.module.css";
import styles2 from "../styles/privasi.module.css";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Privasi() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("privasi");

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
        <h1>Privasi</h1>
        <input type="checkbox" className={styles2.checkboxprivasi} />
        <label className={styles2.labelprivasi}>Buat profilku publik</label>
        <br />
        <p className={styles2.pprivasi}>
          Agar orang lain bisa menemukan profilmu dan mengikutimu, <br /> agar
          kamu bisa mengikuti orang lain,
          <br /> agar kamu bisa masuk di papan skor publik
        </p>
        <input type="checkbox" className={styles2.checkboxprivasi} />
        <label className={styles2.labelprivasi}>Aktifkan diskusi kalimat</label>
        <br />
        <p className={styles2.pprivasi}>Melihat diskusi kalimat</p>
        <input type="checkbox" className={styles2.checkboxprivasi} />
        <label className={styles2.labelprivasi}>
          Iklan yang dipersonalisasi
        </label>
        <br />
        <p className={styles2.pprivasi}>Melacak dan menyesuaikan iklan</p>
        <hr className={styles2.hrprivasi} />
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
export default Privasi;
