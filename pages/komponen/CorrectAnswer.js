import styles from '../../styles/style.module.css';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

function CorrectAnswer({ handleNext }) {
  return (
    <div>
      <div className={styles.divkeren1}>
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
          <button onClick={handleNext} className={styles.buttonlanjutan}>
            LANJUTAN
          </button>
        </div>
      </div>
    </div>
  );
}
export default CorrectAnswer;
