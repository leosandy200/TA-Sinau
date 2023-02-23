import React, { useState } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import styles from "../styles/style.module.css";
import styles2 from "../styles/notifikasi.module.css";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Notifikasi() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("notifikasi");

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
        <h1>Notifikasi</h1>
        <hr className={styles2.hrtargetharian} />
        <div className={styles.div56}>
          <p>Kirim aku email ketika</p>
          <input type="checkbox" className={styles.checkbox} />
          <label className={styles.labelnotifikasi1}>
            Ada pembaruan produk atau tips pembelajaran
          </label>
        </div>
        <div className={styles.div57}>
          <input type="checkbox" className={styles.checkbox2} />
          <label className={styles.labelnotifikasi2}>
            Seseorang menambahkanku sebagai teman
          </label>
        </div>
        <div className={styles.div58}>
          <input type="checkbox" className={styles.checkbox2} />
          <label className={styles.labelnotifikasi2}>
            Teman-temanku membuat progres
          </label>
        </div>
        <div className={styles.div58}>
          <input type="checkbox" className={styles.checkbox2} />
          <label className={styles.labelnotifikasi2}>
            Laporan progres mingguanku sudah siap
          </label>
        </div>
        <div className={styles.div58}>
          <input type="checkbox" className={styles.checkbox2} />
          <label className={styles.labelnotifikasi2}>
            Duolingo menawarkan promosi spesial
          </label>
        </div>
        <div className={styles.div58}>
          <input type="checkbox" className={styles.checkbox2} />
          <label className={styles.labelnotifikasi2}>
            Ada kesempatan untuk berpartisipasi dalam riset
          </label>
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
export default Notifikasi;
