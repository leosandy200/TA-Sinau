import React, { useState } from "react";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Mengikuti from "./komponen/mengikuti";
import Pengikut from "./komponen/pengikuti";

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
  return (
    <div>
      <header
        style={{
          backgroundColor: "#043F75",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/img/LogoTA.png"
          height="20px"
          width="90px"
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            marginLeft: "50px",
          }}
        />
        <nav
          style={{
            marginRight: "100px",
          }}
        >
          <img
            src="/img/indonesia.png"
            style={{
              width: "30px",
              marginLeft: "50px",
              marginBottom: "5px",
            }}
          />
          <img
            src="/img/fire.png"
            style={{
              width: "30px",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          />
          <img
            src="/img/diamond.png"
            style={{
              width: "30px",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          />
          <img
            src="/img/profile.png"
            style={{
              width: "30px",
              marginTop: "10px",
              marginLeft: "50px",
            }}
          />
        </nav>
      </header>
      <div
        style={{
          display: "flex",
        }}
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
            style={{
              display: "flex",
              padding: "5px",
              width: "70%",
              backgroundColor: "#B7D8F7",
              color: "#369DD7",
              borderColor: "#369DD7",
              borderRadius: "10px",
            }}
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
            style={{
              display: "flex",
              padding: "5px",
              width: "70%",
              marginTop: "25px",
              backgroundColor: "white",
              border: "none",
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
            width: "80%",
            marginTop: "25px",
            marginBottom: "50px",
          }}
        >
          <div
            style={{ display: "flex", marginLeft: "30px", marginRight: "30px" }}
          >
            <div style={{ width: "20%" }}>
              <AccountCircleIcon style={{ width: "180px", height: "180px" }} />
            </div>
            <div style={{ width: "55%" }}>
              <h1>Leosandy Wahyu Rismono</h1>
              <h3 style={{ color: "#BCBCBC" }}>Leosandy</h3>
              <div style={{ display: "flex" }}>
                <AccessTimeIcon style={{ color: "#BCBCBC" }} />
                <p
                  style={{
                    color: "#BCBCBC",
                    marginLeft: "15px",
                    marginTop: "3px",
                  }}
                >
                  Bergabung Oktober 2022
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <GroupsIcon style={{ color: "#BCBCBC" }} />
                <p
                  style={{
                    color: "#BCBCBC",
                    marginLeft: "15px",
                    marginTop: "3px",
                  }}
                >
                  0 Mengikuti / 0 Pengikut
                </p>
              </div>
            </div>
            <div style={{ width: "20%", display: "contents" }}>
              <button
                style={{
                  marginTop: "25px",
                  width: "14%",
                  height: "25%",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "15px",
                  backgroundColor: "#6BB7FE",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  padding: "7px",
                }}
              >
                <EditIcon style={{ marginTop: "9px" }} />
                <p style={{ marginLeft: "5px" }}>EDIT PROFILE</p>
              </button>
            </div>
          </div>
          <hr width="85%" style={{ marginRight: "140px" }} />
          <div style={{ marginLeft: "40px", display: "flex" }}>
            <div style={{ width: "60%" }}>
              <h2>Statistik</h2>
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    padding: "10px",
                    width: "40%",
                    display: "flex",
                    borderRadius: "15px",
                    borderColor: "#878787",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="/img/fire.png"
                    width="30px"
                    height="30px"
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  />
                  <div>
                    <p style={{ marginLeft: "-70px" }}>0</p>
                    <p style={{ color: "#BCBCBC", marginLeft: "20px" }}>
                      Runtunan hari ini
                    </p>
                  </div>
                </button>
                <button
                  style={{
                    padding: "10px",
                    marginLeft: "70px",
                    width: "40%",
                    display: "flex",
                    borderRadius: "15px",
                    borderColor: "#878787",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="/img/petir.png"
                    width="30px"
                    height="30px"
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  />
                  <div>
                    <p style={{ marginLeft: "-22px" }}>0</p>
                    <p style={{ color: "#BCBCBC", marginLeft: "20px" }}>
                      Total XP
                    </p>
                  </div>
                </button>
              </div>
              <div style={{ display: "flex", marginTop: "30px" }}>
                <button
                  style={{
                    padding: "10px",
                    width: "40%",
                    display: "flex",
                    borderRadius: "15px",
                    borderColor: "#878787",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="/img/perunggu.png"
                    width="30px"
                    height="30px"
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  />
                  <div>
                    <p style={{ marginLeft: "5px" }}>Perunggu</p>
                    <p style={{ color: "#BCBCBC", marginLeft: "20px" }}>
                      Liga saat ini
                    </p>
                  </div>
                </button>
                <button
                  style={{
                    padding: "10px",
                    marginLeft: "70px",
                    width: "40%",
                    display: "flex",
                    borderRadius: "15px",
                    borderColor: "#878787",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src="/img/medalsatu.png"
                    width="30px"
                    height="30px"
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  />
                  <div>
                    <p style={{ marginLeft: "-75px" }}>0</p>
                    <p style={{ color: "#BCBCBC", marginLeft: "20px" }}>
                      Posisi Tiga Besar
                    </p>
                  </div>
                </button>
              </div>
              <h2>Pencapaian</h2>
              <button
                style={{
                  padding: "15px",
                  width: "90%",
                  display: "flex",
                  marginTop: "20px",
                  borderColor: "#BCBCBC",
                  backgroundColor: "white",
                }}
              >
                <div>
                  <img src="/img/membara.png" width="100px" heigth="100px" />
                  <p style={{ marginTop: "-30px", color: "white" }}>Level 1</p>
                </div>
                <div>
                  <h2 style={{}}>Membara</h2>
                  <div style={{ display: "-webkit-box" }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                    <span style={{ marginLeft: "20px", fontSize: "15px" }}>
                      2/3
                    </span>
                  </div>
                  <p style={{ color: "#BCBCBC", marginLeft: "35px" }}>
                    Capai Runtuan 3 Hari
                  </p>
                </div>
              </button>
              <button
                style={{
                  padding: "15px",
                  width: "90%",
                  display: "flex",
                  marginTop: "-10px",
                  borderColor: "#BCBCBC",
                  backgroundColor: "white",
                }}
              >
                <div>
                  <img
                    src="/img/orang bijak.png"
                    width="100px"
                    heigth="100px"
                  />
                  <p style={{ marginTop: "-30px", color: "white" }}>Level 1</p>
                </div>
                <div>
                  <h2 style={{}}>Orang Bijak</h2>
                  <div style={{ display: "-webkit-box" }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                    <span style={{ marginLeft: "20px", fontSize: "15px" }}>
                      2/3
                    </span>
                  </div>
                  <p style={{ color: "#BCBCBC", marginLeft: "35px" }}>
                    Capai Runtuan 3 Hari
                  </p>
                </div>
              </button>
              <button
                style={{
                  padding: "15px",
                  width: "90%",
                  display: "flex",
                  marginTop: "-10px",
                  borderColor: "#BCBCBC",
                  backgroundColor: "white",
                }}
              >
                <div>
                  <img src="/img/sarjana.png" width="100px" heigth="100px" />
                  <p style={{ marginTop: "-30px", color: "white" }}>Level 1</p>
                </div>
                <div>
                  <h2 style={{}}>Sarjana</h2>
                  <div style={{ display: "-webkit-box" }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                    <span style={{ marginLeft: "20px", fontSize: "15px" }}>
                      2/3
                    </span>
                  </div>
                  <p style={{ color: "#BCBCBC", marginLeft: "35px" }}>
                    Capai Runtuan 3 Hari
                  </p>
                </div>
              </button>
              <button
                onClick={() => router.push("/lihatsemua")}
                style={{
                  display: "flex",
                  width: "90%",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  marginTop: "-10px",
                  borderColor: "#BCBCBC",
                }}
              >
                <h3>Lihat Semua</h3>
                <KeyboardArrowRightIcon style={{ marginTop: "13px" }} />
              </button>
              <hr
                style={{
                  width: "90%",
                  marginLeft: "-1px",
                  color: "black",
                  marginTop: "50px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginLeft: "40px",
                  marginTop: "30px",
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
              <button
                style={{
                  borderColor: "#878787",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  marginTop: "20px",
                  padding: "5px",
                  display: "flex",
                  width: "70%",
                }}
              >
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
              <button
                style={{
                  borderColor: "#878787",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  marginTop: "20px",
                  display: "flex",
                  width: "70%",
                }}
              >
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
              <button
                style={{
                  borderColor: "#878787",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  marginTop: "20px",
                  padding: "5px",
                  display: "flex",
                  width: "70%",
                }}
              >
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
