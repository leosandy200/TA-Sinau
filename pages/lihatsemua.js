import React from "react";
import { useRouter } from "next/router";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import styles from "../styles/style.module.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "90%",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFD333" : "#BCBCBC",
  },
}));

function LihatSemua() {
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
        <nav
          className={styles.nav}
        >
          <img className={styles.logoindonesia} src="/img/indonesia.png" />
          <img className={styles.logofire} src="/img/fire.png" />
          <img className={styles.logodiamond} src="/img/diamond.png" />
          <img className={styles.logoprofile} src="/img/profile.png" />
        </nav>
      </header>
      <div
         className={styles.div1}
      >
        <div
         className={styles.div2}
        >
          <button
            className={styles.buttonbelajar2}
            onClick={() => router.push("/belajar")}
          >
            <img
              className={styles.imgbelajar}
              src="/img/Belajar.png"
              height="50px"
              width="50px"
            />
            <p
              className={styles.pbelajar}
            >
              Belajar
            </p>
          </button>
          <button
            className={styles.buttontoko2}
            onClick={() => router.push("/toko")}
          >
            <img
              className={styles.imgbelajar}
              src="/img/Toko.png"
              height="50px"
              width="50px"
            />
            <p
              className={styles.pbelajar}
            >
              Toko
            </p>
          </button>
        </div>
        <div
           className={styles.div18}
        >
          <h1>Semua Pencapaian</h1>
          <button className={styles.button1}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/membara.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Membara</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/orang bijak.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Orang Bijak</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/sarjana.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Sarjana</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/juara.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Juara</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/menembakjitu.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Menembak Jitu</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/pemenang.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Pemenang</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/legendaris.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Legendaris</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/supel.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Supel</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/kesatria akhir minggu.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Kesatria Akhir Minggu</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.div19} >
              <div  className={styles.div20}>
                <img className={styles.icon}
                  src="/img/Foto genik.png"
                  width="80px"
                  heigth="80px"
                />
                <p className={styles.level1}>Level 1</p>
              </div>
              <div className={styles.div21}>
                <h2 className={styles.text}>Foto Genik</h2>
                <div className={styles.div19}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span className={styles.span}>2 / 3</span>
                </div>
                <p className={styles.capai}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <hr
            width="80%"
            height="10%"
            style={{ marginTop: "40px", marginRight: "300px" }}
          />
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: "10px" }}>TENTANG</p>
            <p style={{ marginLeft: "15px" }}>SEKOLAH</p>
            <p style={{ marginLeft: "15px" }}>APLIKASI</p>
            <p style={{ marginLeft: "15px" }}>TOKO</p>
            <p style={{ marginLeft: "15px" }}>EFIKASI</p>
            <p style={{ marginLeft: "15px" }}>BANTUAN</p>
            <p style={{ marginLeft: "15px" }}>PANDUAN</p>
            <p style={{ marginLeft: "15px" }}>KARIR</p>
            <p style={{ marginLeft: "15px" }}>INVESTOR</p>
            <p style={{ marginLeft: "15px" }}>KETENTUAN</p>
            <p style={{ marginLeft: "15px" }}>PRIVASI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LihatSemua;
