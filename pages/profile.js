import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import stylesBelajar from "../styles/belajar.module.css";
import stylesProfile from "../styles/profile-fix.module.css";
// import styles from "../styles/style.module.css";
import axios from "axios";
import { ButtonStudy } from './komponen/buttonStudy';
import { StatisticCard } from "./component/statistic-card";
import { RedirectCard } from "./component/redirect-card";
import { UpperProfile } from "./component/profile/upper";
import { LowerProfile } from "./component/profile/lower";

const styles = {
  belajar: stylesBelajar,
  profile: stylesProfile
};

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

  const [user, setUser] = useState([]);
  const [xpUser, setXpUser] = useState([]);

  useEffect(() => {

    const infoUser = localStorage.getItem('data')

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.sinau-bahasa.my.id/public-user/' + infoUser);

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
  // return (
  // <div className={styles.container}>
  //   <div className={styles["container-left"]}>
  //     <ButtonStudy imgsrc="/img/Belajar.png" text="Belajar" />
  //     <ButtonStudy imgsrc="/img/Toko.png" text="Toko" />
  //   </div>
  //   <div className={styles["container-right"]}>
  //     <div className={styles["container-right-dataUser"]}>
  //       <div className={styles["container-data-user"]}>
  //         <div className={styles["data-user-text"]} >
  //           <h1 classname={styles.username}>{user.nama}</h1>
  //           <h3 className={styles.color}>{user.namaUser}</h3>
  //           <div className={styles.div1}>
  //             <AccessTimeIcon className={styles.color} />
  //             <p className={styles.bergabung}> Bergabung {user.joined_at}</p>
  //             <GroupsIcon className={styles.color} />
  //             <p className={styles.bergabung} >0 Mengikuti / 0 Pengikut</p>
  //           </div>
  //         </div>
  //         <div classname={styles["avatar-div"]}>
  //           <AccountCircleIcon style={{ width: "180px", height: "180px" }} />
  //         </div>
  //       </div>
  //       <div className={styles["container-edit-button"]}>
  //         <div class={styles["edit-button"]}>
  //           <a className={styles["button"]}>
  //             <EditIcon className={styles.editicon} />
  //             <p onClick={() => router.push("/setting")} className={styles.editprofile}>EDIT PROFILE </p>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //     <hr width="85%" className={styles.hr2} />
  //     <div className={styles.div33}  >
  //       <div className={styles.div34} >
  //         <h2>Statistik</h2>
  //         <div className={styles.div1} >
  //           <button className={styles.buttonfire}>
  //             <img className={styles.imgfire}
  //               src="/img/fire.png"
  //               width="30px"
  //               height="30px"
  //             />
  //             <div>
  //               <p style={{ marginLeft: "-70px" }}>0</p>
  //               <p className={styles.posisitigabesar}>
  //                 Runtunan hari ini
  //               </p>
  //             </div>
  //           </button>
  //           <button
  //             className={styles.buttonfire2}
  //           >
  //             <img
  //               src="/img/petir.png"
  //               width="30px"
  //               height="30px"
  //               className={styles.imgfire}
  //             />
  //             <div>
  //               <p className={styles}>{xpUser.totalXp}</p>
  //               <p className={styles.posisitigabesar}>
  //                 Total XP
  //               </p>
  //             </div>
  //           </button>
  //         </div>
  //         <div style={{ display: "flex", marginTop: "30px" }}>
  //           <button className={styles.buttonfire}>
  //             <img
  //               src="/img/perunggu.png"
  //               width="30px"
  //               height="30px"
  //               className={styles.imgfire}
  //             />
  //             <div>
  //               <p style={{ marginLeft: "5px" }}>Perunggu</p>
  //               <p className={styles.posisitigabesar}>
  //                 Liga saat ini
  //               </p>
  //             </div>
  //           </button>
  //           <button
  //             className={styles.buttonfire}
  //             style={{ marginLeft: "70px" }}
  //           >
  //             <img
  //               src="/img/medalsatu.png"
  //               width="30px"
  //               height="30px"
  //               className={styles.imgfire}
  //             />
  //             <div>
  //               <p style={{ marginLeft: "-75px" }}>0</p>
  //               <p className={styles.posisitigabesar}>
  //                 Posisi Tiga Besar
  //               </p>
  //             </div>
  //           </button>
  //         </div>
  //         <h2>Pencapaian</h2>
  //         <button className={styles.buttonmembara}>
  //           <div>
  //             <img src="/img/membara.png" width="100px" heigth="100px" />
  //             <p className={styles.level2} >Level 1</p>
  //           </div>
  //           <div>
  //             <h2>Membara</h2>
  //             <div style={{ display: "-webkit-box" }}>
  //               <BorderLinearProgress variant="determinate" value={100} />
  //               <span className={styles.dua}>
  //                 2/3
  //               </span>
  //             </div>
  //             <p className={styles.capairuntunan}>
  //               Capai Runtuan 3 Hari
  //             </p>
  //           </div>
  //         </button>
  //         <button className={styles.buttonsarjana}>
  //           <div>
  //             <img src="/img/orang bijak.png" width="100px" heigth="100px" />
  //             <p className={styles.level2} >Level 1</p>
  //           </div>
  //           <div>
  //             <h2>Orang Bijak</h2>
  //             <div style={{ display: "-webkit-box" }}>
  //               <BorderLinearProgress variant="determinate" value={100} />
  //               <span className={styles.dua}>
  //                 2/3
  //               </span>
  //             </div>
  //             <p className={styles.capairuntunan}>
  //               Capai Runtuan 3 Hari
  //             </p>
  //           </div>
  //         </button>
  //         <button className={styles.buttonsarjana}>
  //           <div>
  //             <img src="/img/sarjana.png" width="100px" heigth="100px" />
  //             <p className={styles.level2} >Level 1</p>
  //           </div>
  //           <div>
  //             <h2>Sarjana</h2>
  //             <div style={{ display: "-webkit-box" }}>
  //               <BorderLinearProgress variant="determinate" value={100} />
  //               <span className={styles.dua}>
  //                 2/3
  //               </span>
  //             </div>
  //             <p className={styles.capairuntunan}>
  //               Capai Runtuan 3 Hari
  //             </p>
  //           </div>
  //         </button>
  //         <button
  //           onClick={() => router.push("/lihatsemua")}
  //           className={styles.buttonsarjana}
  //         >
  //           <h3 className={styles.semua}>Lihat Semua</h3>
  //           <KeyboardArrowRightIcon className={styles.keyboard} />
  //         </button>
  //         <hr className={styles.hr3}
  //         />
  //         <div
  //           className={styles.div35}
  //         >
  //           <p className={styles.sekolah} >Tentang</p>
  //           <p className={styles.sekolah}>Sekolah</p>
  //           <p className={styles.sekolah}>Aplikasi</p>
  //           <p className={styles.sekolah}>Toko</p>
  //           <p className={styles.sekolah}>Efikasi</p>
  //           <p className={styles.sekolah}>Bantuan</p>
  //         </div>
  //         <div className={styles.div36}
  //         >
  //           <p className={styles.sekolah}>Panduan </p>
  //           <p className={styles.sekolah}>Karier</p>
  //           <p className={styles.sekolah}>Invertor</p>
  //           <p className={styles.sekolah}>Ketentuan</p>
  //           <p className={styles.sekolah}>Privasi</p>
  //         </div>
  //       </div>
  //       <div className={styles["container-right"]}>
  //         <h2>Teman</h2>
  //         <button
  //           style={{
  //             padding: "10px",
  //             borderColor: "#878787",
  //             backgroundColor: "white",
  //             borderRadius: "10px",
  //             width: "70%",
  //           }}
  //         >
  //           <div
  //             style={{
  //               display: "flex",
  //               justifyContent: "space-around",
  //               color: "#BCBCBC",
  //               fontSize: "16px",
  //             }}
  //           >
  //             <p
  //               onClick={() => setSelectedMenu("mengikuti")}
  //               style={{
  //                 color: selectedMenu === "mengikuti" ? "black" : "#878787",
  //               }}
  //             >
  //               Mengikuti
  //             </p>
  //             <p
  //               onClick={() => setSelectedMenu("pengikut")}
  //               style={{
  //                 color: selectedMenu === "pengikut" ? "black" : "#878787",
  //               }}
  //             >
  //               Pengikut
  //             </p>
  //           </div>
  //           <hr width="102%" />
  //           {selectedMenu === "mengikuti" && <Mengikuti />}
  //           {selectedMenu === "pengikut" && <Pengikut />}
  //         </button>
  //         <br />
  //         <button className={styles.buttonteman}>
  //           <img
  //             src="/img/temukan teman.png"
  //             width="30px"
  //             heigth="30px"
  //             style={{ marginTop: "28px", marginLeft: "15px" }}
  //           />
  //           <div style={{ marginLeft: "15px" }}>
  //             <h3 style={{ fontSize: "16px" }}>Temukan Teman</h3>
  //             <p
  //               style={{
  //                 color: "#BCBCBC",
  //                 fontSize: "15px",
  //                 fontWeight: "500",
  //                 marginLeft: "15px",
  //               }}
  //             >
  //               Cari Pelajar Lainnya
  //             </p>
  //           </div>
  //           <ArrowForwardIosIcon
  //             style={{ marginLeft: "50px", marginTop: "30px" }}
  //           />
  //         </button>
  //         <button className={styles.buttonundangteman}>
  //           <img
  //             src="/img/undang teman.png"
  //             width="30px"
  //             heigth="30px"
  //             style={{ marginTop: "28px", marginLeft: "15px" }}
  //           />
  //           <div style={{ marginRight: "32px" }}>
  //             <h3 style={{ fontSize: "16px" }}>Undang Teman</h3>
  //             <p
  //               style={{
  //                 color: "#BCBCBC",
  //                 fontSize: "15px",
  //                 fontWeight: "500",
  //                 width: "100%",
  //                 marginLeft: "16px",
  //               }}
  //             >
  //               Dapatkan Super Saat Teman Bergabung
  //             </p>
  //           </div>
  //           <ArrowForwardIosIcon
  //             style={{ marginTop: "30px", marginRight: "25px" }}
  //           />
  //         </button>
  //         <button className={styles.buttonundangteman}>
  //           <img
  //             src="/img/facebook.png"
  //             width="30px"
  //             heigth="30px"
  //             style={{ marginTop: "28px", marginLeft: "15px" }}
  //           />
  //           <div>
  //             <h3 style={{ fontSize: "16px", marginRight: "55px" }}>
  //               Facebook
  //             </h3>
  //             <p
  //               style={{
  //                 color: "#BCBCBC",
  //                 fontSize: "15px",
  //                 fontWeight: "500",
  //                 marginLeft: "35px",
  //               }}
  //             >
  //               Hubungkan ke Facebook
  //             </p>
  //           </div>
  //           <ArrowForwardIosIcon
  //             style={{ marginLeft: "5px", marginTop: "30px" }}
  //           />
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );

  return (
    <div className={styles.profile["container"]}>
      <div className={styles.profile["container-position"]}>
        <div className={styles.profile["container-left"]}>
          <div className={styles.profile["container-left-buttons"]}>
            <ButtonStudy imgsrc="/img/Belajar.png" text="Belajar" href="/belajar" />
            <ButtonStudy imgsrc="/img/Toko.png" text="Toko" />
          </div>
        </div>
        <div className={styles.profile["container-right"]}>
          <UpperProfile user={user}/>
          <LowerProfile XP={xpUser}/>
        </div>
      </div>
    </div>
  );
}
export default Profile;
