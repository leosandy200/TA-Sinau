import React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import styles from "../styles/style.module.css";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

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

function Konten4() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon className={styles.CloseIcon} />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={30}
        />
      </div>
      <div className={styles.div40}>
        <h1 className={styles.h1konten2}>
          Mana yang merupakan “wanita - wanita” ?
        </h1>
        <button>
          <div className={styles.div45}>
            <img src="/img/gapaham2.png" width="80px" height="50px" />
          </div>
          <div className={styles.div46}>
            <p>Icon</p>
            <p>2</p>
          </div>
        </button>
        <button className={styles.buttonkonten4}>
          <div className={styles.div45}>
            <img src="/img/gapaham2.png" width="80px" height="50px" />
          </div>
          <div className={styles.div46}>
            <p>Icon</p>
            <p>2</p>
          </div>
        </button>
        <button className={styles.buttonkonten4}>
          <div className={styles.div45}>
            <img src="/img/gapaham2.png" width="80px" height="50px" />
          </div>
          <div className={styles.div46}>
            <p>Icon</p>
            <p>2</p>
          </div>
        </button>
      </div>
      <hr className={styles.hrperiksa} />
      <div className={styles.divperiksa}>
        <button
          onClick={() => router.push("/konten5")}
          className={styles.buttonlompati}
        >
          LOMPATI
        </button>
        <button
          onClick={() => router.push("/hasil4")}
          className={styles.buttonperiksa}
        >
          PERIKSA
        </button>
      </div>
    </div>
  );
}
export default Konten4;
