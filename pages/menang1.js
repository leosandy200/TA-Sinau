import React from "react";
import { useRouter } from "next/router";
import Mulaitantangan from "./komponen/mulaitantangan";
import styles from "../styles/style.module.css";

function Menang1() {
  const router = useRouter();
  return (
    <div>
      <img src="/img/gapaham.png" className={styles.imggapaham} />
      <h3 className={styles.h3mulailevel}>
        Kamu telah memperoleh 33 XP hari ini
      </h3>
      <h4 className={styles.h4menang1}>
        Pelajaran Selesai !! <span className={styles.spanmenang1}>+10 XP</span>
      </h4>
      <h4 className={styles.h4baguskombo}>
        Bagus Kombo <span className={styles.spanmenang1}>+30 XP</span>
      </h4>
      <hr className={styles.hrmennag1} />
      <div className={styles.divperiksa}>
        <button
          onClick={() => router.push("/cekkartu")}
          className={styles.ulasanmenang}
        >
          ULAS PELAJARAN
        </button>
        <button
          onClick={() => router.push("/menang2")}
          className={styles.lanjutanmenang}
        >
          LANJUTAN
        </button>
      </div>
    </div>
  );
}
export default Menang1;
