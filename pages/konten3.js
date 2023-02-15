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

function Konten3() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon className={styles.CloseIcon} />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={20}
        />
      </div>
      <div className={styles.div43}>
        <h1 className={styles.h1konten2}>Pilih yang kamu dengar</h1>
        <img
          src="/img/gapaham.png"
          width="120px"
          height="100px"
          className={styles.imgkonten3}
        />
        <img
          src="/img/gapaham2.png"
          width="80px"
          height="50px"
          className={styles.imgknten3}
        />
      </div>
      <hr width="30%" />
      <div className={styles.div42}>
        <button className={styles.buttonkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
      </div>
      <div className={styles.div44}>
        <button className={styles.buttonkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
        <button className={styles.btnkonten3}>Makan</button>
      </div>
      <hr className={styles.hrperiksa} />
      <div className={styles.divperiksa}>
        <button
          onClick={() => router.push("/konten4")}
          className={styles.buttonlompati}
        >
          LOMPATI
        </button>
        <button
          onClick={() => router.push("/hasil3")}
          className={styles.buttonperiksa}
        >
          PERIKSA
        </button>
      </div>
    </div>
  );
}
export default Konten3;
