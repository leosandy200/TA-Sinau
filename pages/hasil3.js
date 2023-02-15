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

function Hasil3() {
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
      <div className={styles.divkeren1}>
        <hr className={styles.hrkeren} />
        <div className={styles.divkeren2}>
          <div className={styles.divkeren3}>
            <img src="/img/keren.png" className={styles.imgkeren} />
            <h1 className={styles.h1keren}>Keren!!</h1>
          </div>
          <div className={styles.divkeren4}>
            <div className={styles.divkeren5}>
              <OutlinedFlagIcon className={styles.OutlinedFlagIcon} />
              <p>Laporkan</p>
            </div>
            <div className={styles.divkeren6}>
              <ChatBubbleOutlineOutlinedIcon
                className={styles.ChatBubbleOutlineOutlinedIcon}
              />
              <p>Diskusi</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/konten4")}
            className={styles.buttonlanjutan}
          >
            LANJUTAN
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hasil3;
