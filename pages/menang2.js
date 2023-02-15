import React from "react";
import { useRouter } from "next/router";
import Mulaitantangan from "./komponen/mulaitantangan";
import styles from "../styles/style.module.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFD333" : "#308fe8",
  },
}));

function Menang2() {
  const router = useRouter();
  return (
    <div>
      <img src="/img/gapaham.png" className={styles.imggapaham} />
      <BorderLinearProgress
        variant="determinate"
        value={100}
        className={styles.BorderLinearProgressmenang2}
      />
      <h3 className={styles.h3mulailevel}>
        Kamu sudah mencapai target <br /> harianmu
      </h3>
      <h4 className={styles.h4mennag2}>
        Tantangan Selesai <span className={styles.spanmenang1}>+20 XP</span>
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
          onClick={() => router.push("/menang3")}
          className={styles.lanjutanmenang}
        >
          LANJUTAN
        </button>
      </div>
    </div>
  );
}
export default Menang2;
