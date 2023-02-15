import styles from "../../styles/style.module.css";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function WrongAnswer({ handleNext }) {
  return (
    <div>
      <div className={styles.divsalah1}>
        <div className={styles.divsalah2}>
          <div className={styles.divsalah3}>
            <img
              src="/img/salah.png"
              className={styles.imgsalah}
              width="80px"
              height="80px"
            />
            <h1 className={styles.h1salah}>Jawaban salah</h1>
          </div>
          <div className={styles.divsalah4}>
            <div className={styles.divsalah5}>
              <OutlinedFlagIcon className={styles.OutlinedFlagIcon} />
              <p>Laporkan</p>
            </div>
            <div className={styles.divsalah6}>
              <ChatBubbleOutlineOutlinedIcon
                className={styles.ChatBubbleOutlineOutlinedIcon}
              />
              <p>Diskusi</p>
            </div>
          </div>
          <button onClick={handleNext} className={styles.buttonlanjutansalah}>
            LANJUTAN
          </button>
        </div>
      </div>
    </div>
  );
}
export default WrongAnswer;
