import React from "react";
import { useRouter } from "next/router";
import Mulaitantangan from "./komponen/mulaitantangan";
import styles from "../styles/style.module.css";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#60CF0F" : "#308fe8",
  },
}));

function Konten6() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon className={styles.CloseIcon} />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={50}
        />
      </div>
      <div className={styles.div39}>
        <img
          src="/img/latihansulit.png"
          width="30px"
          height="30px"
          className={styles.latihansulit}
        />
        <p className={styles.platihansulit}>Latihan Sulit</p>
      </div>
      <div className={styles.div40}>
        <h1>Bagaimana cara mengatakan “dan” ?</h1>
        <button className={styles.buttonjawab2}>I</button>
        <br />
        <button className={styles.buttonjawab2}>you</button>
        <br />
        <button className={styles.buttonjawab2}>And</button>
      </div>
      <hr className={styles.hrperiksa} />
      <div className={styles.divperiksa}>
        <button
          onClick={() => router.push("/konten7")}
          className={styles.buttonlompati}
        >
          LOMPATI
        </button>
        <button
          onClick={() => router.push("/hasil6")}
          className={styles.buttonperiksa}
        >
          PERIKSA
        </button>
      </div>
    </div>
  );
}
export default Konten6;
