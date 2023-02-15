import React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import styles from "../styles/style.module.css";
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

function Konten2() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon className={styles.CloseIcon} />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={60}
        />
      </div>
      <div className={styles.div41}>
        <h1 className={styles.h1konten2}>Pilih Pasangan Yang Cocok</h1>
        <button className={styles.buttonkonten2}>I</button>
        <button className={styles.btnkonten2}>you</button>
        <br />
        <button className={styles.buttonkonten2}>I</button>
        <button className={styles.btnkonten2}>you</button>
        <br />
        <button className={styles.buttonkonten2}>I</button>
        <button className={styles.btnkonten2}>you</button>
      </div>
      <hr className={styles.hrperiksa} />
      <div className={styles.divperiksa}>
        <button
          onClick={() => router.push("/konten8")}
          className={styles.buttonlompati}
        >
          LOMPATI
        </button>
        <button
          onClick={() => router.push("/hasil7")}
          className={styles.buttonperiksa}
        >
          PERIKSA
        </button>
      </div>
    </div>
  );
}
export default Konten2;
