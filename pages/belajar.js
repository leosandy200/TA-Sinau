import React from "react";
import BookIcon from "@mui/icons-material/Book";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/router";
import styles from "../styles/style.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "50%",
  marginLeft: "90px",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFD333" : "#BCBCBC",
  },
}));

function Belajar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logota}
          src="/img/LogoTA.png"
          height="20px"
          width="90px"
        />
        <nav className={styles.nav}>
          <img className={styles.logoindonesia} src="/img/indonesia.png" />
          <img className={styles.logofire} src="/img/fire.png" />
          <img className={styles.logodiamond} src="/img/diamond.png" />
          <img className={styles.logoprofile} src="/img/profile.png" />
        </nav>
      </header>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <button
            onClick={() => router.push("/belajar")}
            className={styles.buttonbelajar}
          >
            <img
              src="/img/Belajar.png"
              height="50px"
              width="50px"
              className={styles.imgbelajar}
            />
            <p className={styles.pbelajar}>Belajar</p>
          </button>
          <button
            onClick={() => router.push("/toko")}
            className={styles.buttontoko}
          >
            <img
              src="/img/Toko.png"
              height="50px"
              width="50px"
              className={styles.imgtoko}
            />
            <p className={styles.pbelajar}>Toko</p>
          </button>
        </div>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <div className={styles.div5}>
              <h2 className={styles.unit}>Unit 1</h2>
              <button className={styles.buttonbukupanduan1}>
                <BookIcon className={styles.BookIcon} />
                <p className={styles.bukupanduan}>Buku Panduan</p>
              </button>
            </div>
            <h3 className={styles.memahamifrasadasar}>Memahami Frasa Dasar</h3>
          </div>

          <div className={styles.div6}>
            <img
              onClick={handleClickOpen}
              className={styles.img}
              src="/img/star.png"
              height="80px"
              width="80px"
            />
            <Dialog className={styles.Dialog} open={open} onClose={handleClose}>
              <DialogContent className={styles.DialogContent}>
                <DialogContentText>
                  <button className={styles.DialogContentText}>
                    <h2 className={styles.h2belajar}>Memahami Frase Dasar </h2>
                    <h3 className={styles.h2belajar}>Pelajaran 1 ke 4</h3>
                    <button
                      className={styles.btnbljr}
                      onClick={() => router.push("/isi")}
                    >
                      MULAI +10 XP
                    </button>
                  </button>
                </DialogContentText>
              </DialogContent>
            </Dialog>
            <img
              className={styles.img}
              src="/img/lock.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/Bonus.png"
              height="80px"
              width="80px"
            />
          </div>
          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/book.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/piala.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/kunci.png"
              height="80px"
              width="80px"
            />
          </div>
          <div
            className={styles.divunit2}
            style={{
              marginTop: "50px",
            }}
          >
            <div className={styles.div5}>
              <h2 className={styles.unit}>Unit 2</h2>
              <button className={styles.buttonbukupanduan2}>
                <BookIcon className={styles.BookIcon} />
                <p className={styles.bukupanduan}>Buku Panduan</p>
              </button>
            </div>
            <h3 className={styles.memahamifrasadasar}>Memahami Frasa Dasar</h3>
          </div>

          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/starungu.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/lock.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/Bonus.png"
              height="80px"
              width="80px"
            />
          </div>
          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/book.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/piala.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/kunci.png"
              height="80px"
              width="80px"
            />
          </div>
          <div className={styles.divunit3}>
            <div className={styles.div5}>
              <h2 className={styles.unit}>Unit 3</h2>
              <button className={styles.buttonbukupanduan3}>
                <BookIcon className={styles.BookIcon} />
                <p className={styles.bukupanduan}>Buku Panduan</p>
              </button>
            </div>
            <h3 className={styles.memahamifrasadasar}>Memahami Frasa Dasar</h3>
          </div>

          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/startosca.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/lock.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/Bonus.png"
              height="80px"
              width="80px"
            />
          </div>
          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/book.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/piala.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/kunci.png"
              height="80px"
              width="80px"
            />
          </div>
          <div className={styles.div4} style={{ marginTop: "50px" }}>
            <div className={styles.div5}>
              <h2 className={styles.unit}>Unit 4</h2>
              <button className={styles.buttonbukupanduan1}>
                <BookIcon className={styles.BookIcon} />
                <p className={styles.bukupanduan}>Buku Panduan</p>
              </button>
            </div>
            <h3 className={styles.memahamifrasadasar}>Memahami Frasa Dasar</h3>
          </div>

          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/star.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/lock.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/Bonus.png"
              height="80px"
              width="80px"
            />
          </div>
          <div className={styles.div6}>
            <img
              className={styles.img}
              src="/img/book.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/piala.png"
              height="80px"
              width="80px"
            />
            <img
              className={styles.img}
              src="/img/kunci.png"
              height="80px"
              width="80px"
            />
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div8}>
            <img
              className={styles.imgmedal}
              src="/img/medal.png"
              height="100px"
              width="200px"
            />
            <h3 className={styles.h3bukapapan}>Buka Papan Peringkat !</h3>
            <p className={styles.lengkapipelajaran}>
              Lengkapi 5 pelajaran lagi untuk memulai kompetisi
            </p>
          </div>
          <div className={styles.div9}>
            <div className={styles.div10}>
              <p>Progress XP</p>
              <p className={styles.edittarget}>EDIT TARGET</p>
            </div>
            <div className={styles.div11}>
              <img src="/img/Harta Karun.png" height="50px" width="50px" />
              <p className={styles.targetharian}>Target Harian</p>
            </div>
            <div className={styles.div12}>
              <BorderLinearProgress variant="determinate" value={100} />
              <p className={styles.xp}>24 / 10 XP</p>
            </div>
          </div>
          <div className={styles.div13}>
            <div className={styles.div14}>
              <p>Pencapaian Selanjutnya</p>
              <p   onClick={() => router.push("/lihatsemua")} className={styles.lihatsemua}>lihat semua</p>
            </div>
            <div className={styles.pecapaianselanjutnya}>
              <img
                src="/img/Pencapaian Selanjutnya.png"
                height="50px"
                width="50px"
              />
              <p className={styles.targetharian}>Target Harian</p>
            </div>
            <div className={styles.div12}>
              <BorderLinearProgress variant="determinate" value={100} />
              <p className={styles.xp}>24 / 10 XP</p>
            </div>
          </div>
          <div className={styles.div15}>
            <div className={styles.div16}>
              <p>Teman</p>
              <p className={styles.totalxp}>Total XP</p>
            </div>
            <hr />
            <div className={styles.div17}>
              <img src="/img/Icon Teman.png" height="50px" width="50px" />
              <p className={styles.leosandy}>Leosandy Wahyu Rismono</p>
              <p className={styles.leosandy}>0 XP</p>
            </div>
            <hr />
            <button className={styles.buttonundang}>Undang</button>
            <button className={styles.buttonundang}>Seacrh</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Belajar;
