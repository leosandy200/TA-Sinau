import React, { useState } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import styles from "../styles/style.module.css";
import styles2 from "../styles/edittargetharian.module.css";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";
import Edittarget from "./komponen/edittarget";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Edittargetharian() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("edittargetharian");

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
        <h1>Target Harian </h1>
        <p className={styles2.ptargetharian}>
          Hai, ini Pelatihmu! Memilih satu target harian <br /> akan membantumu
          termotivasi saat belajar bahasa. Kamu bisa ubah target ini kapan pun.
        </p>
        <img
          src="/img/gapaham.png"
          width="120px"
          height="100px"
          className={styles2.imgtargetharian}
        />
        <div className={styles2.div54}>
          <Edittarget />
        </div>
        <hr className={styles2.hreditharian} />
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
export default Edittargetharian;
