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

function Hasil5() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.div37}>
        <CloseIcon className={styles.CloseIcon} />
        <BorderLinearProgress
          className={styles.BorderLinearProgress}
          variant="determinate"
          value={100}
        />
      </div>
      <div className={styles.div47}>
        <img
          src="/img/latihansulit.png"
          width="30px"
          height="30px"
          className={styles.imglatihansulit}
        />
        <p className={styles.platihansulit}>Latihan Sulit</p>
      </div>
      <div className={styles.div50}>
        <h1>TULISKAN DALAM BAHASA INDONESIA</h1>
        <div className={styles.div49}>
          <img src="/img/gapaham.png" width="100px" height="80px" />
          <button className={styles.buttonkonten5}>
            <img
              className={styles.imgkonten5}
              src="/img/gapaham2.png"
              width="50px"
              height="30px"
            />
            <div>
              <p className={styles.pkonten1}>The Boy</p>
              <p className={styles.pkonten2}>
                -----------------------------------
              </p>
            </div>
          </button>
        </div>
        <hr className={styles.hrkonten1} />
        <hr className={styles.hrkonten2} />
        <hr className={styles.hrkonten2} />
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
            onClick={() => router.push("/berturut10")}
            className={styles.buttonlanjutan}
          >
            LANJUTAN
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hasil5;
