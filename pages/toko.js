import React from "react";
import BookIcon from "@mui/icons-material/Book";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/router";
import styles from "../styles/style.module.css";

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
  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logota}
          src="/img/LogoTA.png"
          height="20px"
          width="90px"
        />
        <nav  className={styles.nav}
        >
          <img className={styles.logoindonesia} src="/img/indonesia.png" />
          <img className={styles.logofire} src="/img/fire.png" />
          <img className={styles.logodiamond} src="/img/diamond.png" />
          <img onClick={() => router.push("/profile")} 
          className={styles.logoprofile} src="/img/profile.png" />
        </nav>
      </header>
      <div
        className={styles.div1}
      >
        <div
          style={{
            width: "20%",
            textAlign: "center",
            marginTop: "25px",
            marginLeft: "50px",
          }}
        >
          <button
            onClick={() => router.push("/belajar")}
            className={styles.buttonbelajar2}
          >
            <img
              src="/img/Belajar.png"
              height="50px"
              width="50px"
              style={{ marginTop: "5px", marginLeft: "10px" }}
            />
            <p
              style={{
                marginLeft: "20px",
                fontSize: "20px",
              }}
            >
              Belajar
            </p>
          </button>
          <button
            onClick={() => router.push("/toko")}
            className={styles.buttonbelajar}
            style={{
              marginTop: "25px",
            }}
          >
            <img
              src="/img/Toko.png"
              height="50px"
              width="50px"
              style={{ marginTop: "7px", marginLeft: "10px" }}
            />
            <p
              style={{
                marginLeft: "20px",
                fontSize: "20px",
              }}
            >
              Toko
            </p>
          </button>
        </div>
        <div
          style={{
            width: "60%",
            marginTop: "25px",
            position: "relative",
            left: "5%",
          }}
        >
          <h1>Power - Up</h1>
          <hr style={{ width: "80%", marginLeft: "0px" }} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
            }}
          >
            <img src="/img/dksl.png" height="100px" width="100px" />
            <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
              <h3>Pembeku Runtunan</h3>
              <button className={styles.buttonpakai}>0 / 2 DIPAKAI</button>
              <p>
                Pembeku Runtunan mencegah runtunanmu hilang <br /> meskipun
                tidak beraktivitas selama sehari penuh.
              </p>
            </div>
            <button className={styles.buttondapat}>
              DAPATKAN SATU : <br />
              10
            </button>
          </div>
          <hr style={{ width: "80%", marginLeft: "0px" }} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
            }}
          >
            <img src="/img/dksl.png" height="100px" width="100px" />
            <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
              <h3>Ganda atau Hamba</h3>
              <button className={styles.buttonpakai}>0 / 2 DIPAKAI</button>
              <p>
                Gandakan taruhan lima lingotmu dengan <br /> mempertahankan
                runtunan selama tujuh hari.
              </p>
            </div>
            <button className={styles.buttontaruhkan}>
              TARUHKAN : <br /> 10
            </button>
          </div>
          <hr style={{ width: "80%", marginLeft: "0px" }} />
          <div
            style={{
              display: "flex",
              marginLeft: "50px",
              marginTop: "50px",
            }}
          >
            <p style={{ marginLeft: "30px" }}>Tentang</p>
            <p style={{ marginLeft: "30px" }}>Sekolah</p>
            <p style={{ marginLeft: "30px" }}>Aplikasi</p>
            <p style={{ marginLeft: "30px" }}>Toko</p>
            <p style={{ marginLeft: "30px" }}>Efikasi</p>
            <p style={{ marginLeft: "30px" }}>Bantuan</p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "80px",
              marginBottom: "80px",
            }}
          >
            <p style={{ marginLeft: "30px" }}>Panduan </p>
            <p style={{ marginLeft: "30px" }}>Karier</p>
            <p style={{ marginLeft: "30px" }}>Invertor</p>
            <p style={{ marginLeft: "30px" }}>Ketentuan</p>
            <p style={{ marginLeft: "30px" }}>Privasi</p>
          </div>
        </div>
        <div className={styles.div7}
        >
          <div className={styles.div8}
          >
            <img 
            className={styles.imgmedal}
              src="/img/medal.png"
              height="100px"
              width="200px"
            />
            <h3 className={styles.h3bukapapan}
            >
              Buka Papan Peringkat !
            </h3>
            <p className={styles.lengkapipelajaran}
            >
              Lengkapi 5 pelajaran lagi untuk memulai kompetisi
            </p>
          </div>
          <div className={styles.div9}
          >
            <div className={styles.div10}
            >
              <p>Progress XP</p>
              <p className={styles.edittarget}>EDIT TARGET</p>
            </div>
            <div className={styles.div11}>
              <img src="/img/Harta Karun.png" height="50px" width="50px" />
              <p className={styles.targetharian}
              >
                Target Harian
              </p>
            </div>
            <div className={styles.div12}>
              <BorderLinearProgress variant="determinate" value={100} />
              <p  className={styles.xp}
              >
                24 / 10 XP
              </p>
            </div>
          </div>
          <div className={styles.div13}
          >
            <div className={styles.div14}
            >
              <p>Pencapaian Selanjutnya</p>
              <p  onClick={() => router.push("/lihatsemua")} 
              className={styles.lihatsemua}>lihat semua</p>
            </div>
            <div className={styles.pecapaianselanjutnya}>
              <img
                src="/img/Pencapaian Selanjutnya.png"
                height="50px"
                width="50px"
              />
              <p className={styles.targetharian}>
                Target Harian
              </p>
            </div>
            <div className={styles.div12}>
              <BorderLinearProgress variant="determinate" value={100} />
              <p
                className={styles.xp}
              >
                24 / 10 XP
              </p>
            </div>
          </div>
          <div className={styles.div15}
          >
            <div className={styles.div16}
            >
              <p>Teman</p>
              <p className={styles.totalxp}>Total XP</p>
            </div>
            <hr />
            <div className={styles.div17}
            >
              <img src="/img/Icon Teman.png" height="50px" width="50px" />
              <p className={styles.leosandy}>
                Leosandy Wahyu Rismono
              </p>
              <p className={styles.leosandy}
              >
                0 XP
              </p>
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
