import React from "react";
import { useRouter } from "next/router";
import Mulaitantangan from "./komponen/mulaitantangan";
import styles from "../styles/style.module.css";

function Mulailevel() {
  const router = useRouter();
  return (
    <div>
      <img src="/img/gapaham.png" className={styles.imggapaham} />
      <h3 className={styles.h3mulailevel}>Ayo Selesaikan Level Ini</h3>
      <h5 className={styles.h5mulailevel}>
        Tunjukan apa yang kamu pelajari dan raih hadiah spesial
      </h5>
      <Mulaitantangan onClick={() => router.push("/isi")} />
    </div>
  );
}
export default Mulailevel;