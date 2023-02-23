import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormControl } from "@mui/material/FormControl";
import styles from "../styles/style.module.css";
import styles2 from "../styles/aturkhusus.module.css";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Aturkhusus() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("aturkursus");

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
        <h1>Atur Khusus</h1>
        <hr className={styles2.hraturkhusus} />
        <div className={styles2.div51}>
          <p>Kursus</p>
          <p>BAHASA JAWA</p>
          <p className={styles2.reset}>RESET</p>
        </div>
        <hr className={styles2.hraturkhusus} />
        <hr className={styles2.hraturkhusus2} />
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
export default Aturkhusus;
