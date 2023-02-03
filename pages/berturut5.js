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
function Berturut5() {
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
      <div>
        <div className={styles.divberturut}>
          <div className={styles.divberturut1}>
            <p className={styles.pberturut}>
              Apa yang <br /> lebih baik <br /> dari lima
              <br />
              kali berturut <br /> turut ??
            </p>
            <img src="/img/gapaham3.png" width="150px" />
          </div>
          <div>
            <p className={styles.pberturut}>
              Terjun <br />
              payung
              <br /> yang akan
              <br /> ku lakukan <br /> nanti
            </p>
            <img
              src="/img/gapaham4.png"
              width="150px"
              className={styles.imgberturut}
            />
          </div>
        </div>
        <hr className={styles.hrberturut} />
        <div>
          <button
            className={styles.btnberturut}
            onClick={() => router.push("/konten6")}
          >
            LANJUTAN
          </button>
        </div>
      </div>
    </div>
  );
}
export default Berturut5;
