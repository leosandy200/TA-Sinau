import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Mengikuti from "./komponen/mengikuti";
import Pengikut from "./komponen/pengikuti";
import styles from "../styles/style.module.css";
import axios from "axios";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "250%",
  marginLeft: "34px",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFD333" : "#BCBCBC",
  },
}));

function Profile() {  
  const [selectedMenu, setSelectedMenu] = useState("mengikuti");
  const router = useRouter();


  // buat ngedisplay data di setting nanti
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   const dataUser = JSON.parse(localStorage.getItem('data'))
  //   setData(dataUser) 
  // }, [])

  const [user, setUser] = useState([]);
  const [xpUser, setXpUser] = useState ([]);

  useEffect(() => {

    const infoUser = localStorage.getItem('data')

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.sinau-bahasa.my.id/api/public-user/' + infoUser);

        const dataUser = response.data?.data;
        const Xp = response.data?.data?.xp;

        setUser(dataUser)
        setXpUser(Xp)
            
      }
      catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [])


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
          className={styles.div29}
        >
          <div className={styles.div30}
          >
            <div className={styles.div31}>
              <AccountCircleIcon style={{ width: "180px", height: "180px" }} />
            </div>
            <div className={styles.div31}>
              <h1>{user.nama}</h1>
              <h3 className={styles.color}>{user.namaUser}</h3>
              <div className={styles.div1}>
                <AccessTimeIcon className={styles.color} />
                <p
                  className={styles.bergabung}
                >
                  Bergabung {user.joined_at}
                </p>
              </div>
              <div className={styles.div1}>
                <GroupsIcon className={styles.color} />
                <p
                  className={styles.bergabung}
                >
                  0 Mengikuti / 0 Pengikut
                </p>
              </div>
            </div>
            <div className={styles.div32}>
              <button className={styles.buttoneditprofile}>
                <EditIcon className={styles.editicon} />
                <p onClick={() => router.push("/setting")}
                  className={styles.editprofile}>EDIT PROFILE </p>
              </button>
            </div>
          </div>
          <hr width="85%" className={styles.hr2} />
          <div className={styles.div33}  >
            <div className={styles.div34} >
              <h2>Statistik</h2>
              <div className={styles.div1} >
                <button className={styles.buttonfire}>
                  <img className={styles.imgfire}
                    src="/img/fire.png"
                    width="30px"
                    height="30px"
                  />
                  <div>
                    <p style={{ marginLeft: "-70px" }}>0</p>
                    <p className={styles.posisitigabesar}>
                      Runtunan hari ini
                    </p>
                  </div>
                </button>
                <button
                  className={styles.buttonfire2}
                >
                  <img
                    src="/img/petir.png"
                    width="30px"
                    height="30px"
                    className={styles.imgfire}
                  />
                  <div>
                    <p className={styles.o}>{xpUser.totalXp}</p>
                    <p className={styles.posisitigabesar}>
                      Total XP
                    </p>
                  </div>
                </button>
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <button className={styles.buttonfire}>
                  <img
                    src="/img/perunggu.png"
                    width="30px"
                    height="30px"
                    className={styles.imgfire}
                  />
                  <div>
                    <p style={{ marginLeft: "5px" }}>Perunggu</p>
                    <p className={styles.posisitigabesar}>
                      Liga saat ini
                    </p>
                  </div>
                </button>
                <button
                  className={styles.buttonfire}
                  style={{ marginLeft: "70px" }}
                >
                  <img
                    src="/img/medalsatu.png"
                    width="30px"
                    height="30px"
                    className={styles.imgfire}
                  />
                  <div>
                    <p style={{ marginLeft: "-75px" }}>0</p>
                    <p className={styles.posisitigabesar}>
                      Posisi Tiga Besar
                    </p>
                  </div>
                </button>
              </div>
              <h2>Pencapaian</h2>
              <button className={styles.buttonmembara}>
                <div>
                  <img src="/img/membara.png" width="100px" heigth="100px" />
                  <p className={styles.level2} >Level 1</p>
                </div>
                <div>
                  <h2>Membara</h2>
                  <div style={{ display: "-webkit-box" }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                    <span className={styles.dua}>
                      2/3
                    </span>
                  </div>
                  <p className={styles.capairuntunan}>
                    Capai Runtuan 3 Hari
                  </p>
                </div>
              </button>
              <button className={styles.buttonsarjana}>
                <div>
                  <img src="/img/orang bijak.png" width="100px" heigth="100px" />
                  <p className={styles.level2} >Level 1</p>
                </div>
                <div>
                  <h2>Orang Bijak</h2>
                  <div style={{ display: "-webkit-box" }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                    <span className={styles.dua}>
                      2/3
                    </span>
                  </div>
                  <p className={styles.capairuntunan}>
                    Capai Runtuan 3 Hari
                  </p>
                </div>
              </button>
              <button className={styles.buttonsarjana}>
                <div>
                  <img src="/img/sarjana.png" width="100px" heigth="100px" />
                  <p className={styles.level2} >Level 1</p>
                </div>
                <div>
                  <h2>Sarjana</h2>
                  <div style={{ display: "-webkit-box" }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                    <span className={styles.dua}>
                      2/3
                    </span>
                  </div>
                  <p className={styles.capairuntunan}>
                    Capai Runtuan 3 Hari
                  </p>
                </div>
              </button>
              <button
                onClick={() => router.push("/lihatsemua")}
                className={styles.buttonsarjana}
              >
                <h3 className={styles.semua}>Lihat Semua</h3>
                <KeyboardArrowRightIcon className={styles.keyboard} />
              </button>
              <hr className={styles.hr3}
              />
              <div
                className={styles.div35}
              >
                <p className={styles.sekolah} >Tentang</p>
                <p className={styles.sekolah}>Sekolah</p>
                <p className={styles.sekolah}>Aplikasi</p>
                <p className={styles.sekolah}>Toko</p>
                <p className={styles.sekolah}>Efikasi</p>
                <p className={styles.sekolah}>Bantuan</p>
              </div>
              <div className={styles.div36}
              >
                <p className={styles.sekolah}>Panduan </p>
                <p className={styles.sekolah}>Karier</p>
                <p className={styles.sekolah}>Invertor</p>
                <p className={styles.sekolah}>Ketentuan</p>
                <p className={styles.sekolah}>Privasi</p>
              </div>
            </div>
            <div style={{ width: "40%" }}>
              <h2>Teman</h2>
              <button
                style={{
                  padding: "10px",
                  borderColor: "#878787",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  width: "70%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    color: "#BCBCBC",
                    fontSize: "16px",
                  }}
                >
                  <p
                    onClick={() => setSelectedMenu("mengikuti")}
                    style={{
                      color: selectedMenu === "mengikuti" ? "black" : "#878787",
                    }}
                  >
                    Mengikuti
                  </p>
                  <p
                    onClick={() => setSelectedMenu("pengikut")}
                    style={{
                      color: selectedMenu === "pe" ? "black" : "#878787",
                    }}
                  >
                    Pengikut
                  </p>
                </div>
                <hr width="102%" />
                {selectedMenu === "mengikuti" && <Mengikuti />}
                {selectedMenu === "pengikut" && <Pengikut />}
              </button>
              <br />
              <button className={styles.buttonteman}>
                <img
                  src="/img/temukan teman.png"
                  width="30px"
                  heigth="30px"
                  style={{ marginTop: "28px", marginLeft: "15px" }}
                />
                <div style={{ marginLeft: "15px" }}>
                  <h3 style={{ fontSize: "16px" }}>Temukan Teman</h3>
                  <p
                    style={{
                      color: "#BCBCBC",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginLeft: "15px",
                    }}
                  >
                    Cari Pelajar Lainnya
                  </p>
                </div>
                <ArrowForwardIosIcon
                  style={{ marginLeft: "50px", marginTop: "30px" }}
                />
              </button>
              <button className={styles.buttonundangteman}>
                <img
                  src="/img/undang teman.png"
                  width="30px"
                  heigth="30px"
                  style={{ marginTop: "28px", marginLeft: "15px" }}
                />
                <div style={{ marginRight: "32px" }}>
                  <h3 style={{ fontSize: "16px" }}>Undang Teman</h3>
                  <p
                    style={{
                      color: "#BCBCBC",
                      fontSize: "15px",
                      fontWeight: "500",
                      width: "100%",
                      marginLeft: "16px",
                    }}
                  >
                    Dapatkan Super Saat Teman Bergabung
                  </p>
                </div>
                <ArrowForwardIosIcon
                  style={{ marginTop: "30px", marginRight: "25px" }}
                />
              </button>
              <button className={styles.buttonundangteman}>
                <img
                  src="/img/facebook.png"
                  width="30px"
                  heigth="30px"
                  style={{ marginTop: "28px", marginLeft: "15px" }}
                />
                <div>
                  <h3 style={{ fontSize: "16px", marginRight: "55px" }}>
                    Facebook
                  </h3>
                  <p
                    style={{
                      color: "#BCBCBC",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginLeft: "35px",
                    }}
                  >
                    Hubungkan ke Facebook
                  </p>
                </div>
                <ArrowForwardIosIcon
                  style={{ marginLeft: "5px", marginTop: "30px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
