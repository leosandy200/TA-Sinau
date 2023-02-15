import React from "react";
import { useRouter } from "next/router";
import Mulaitantangan from "./komponen/mulaitantangan";
import styles from "../styles/style.module.css";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Lanjutan from "./komponen/lanjutan";

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

function isi() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon className={styles.CloseIcon} />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={0}
        />
      </div>
      <div className={styles.div38}>
        <img src="/img/gapaham2.png" />
        <p className={styles.pisi}>
          Cobalah Latihan yang tersulit dari level ini !!
        </p>
      </div>
      <Lanjutan />
    </div>
  );
}
export default isi;
