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

function Menang3() {
  const router = useRouter();
  return (
    <div>
      <img src="/img/gapaham.png" className={styles.imggapaham} />
      <h3 className={styles.h3mulailevel}>Siap hadapi tantangan ?</h3>
      <h4 style={{ textAlign: "center", color: "#848484" }}>
        Pertanahkan runtunanmu 7 hari lagi dan kami <br /> akan gandakan taruhan
        5 lingotmu
      </h4>
      <button
        style={{
          backgroundColor: "#1CB0F6",
          color: "white",
          display: "block",
          margin: "auto",
          borderRadius: "5px",
          border: "none",
          padding: "12px",
          marginBottom: "53px",
        }}
      >
        TARUHKAN 5 LINGOT
      </button>
      <hr className={styles.hrperiksa} />
      <div className={styles.divperiksa}>
        <button
          onClick={() => router.push("/cekkartu")}
          className={styles.ulasanmenang}
        >
          ULAS PELAJARAN
        </button>
        <button
          onClick={() => router.push("/belajar")}
          className={styles.lanjutanmenang}
        >
          LANJUTAN
        </button>
      </div>
    </div>
  );
}
export default Menang3;
