import React from "react";
import { useRouter } from "next/router";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

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
          <h1>Semua Pencapaian</h1>
          <button
            style={{
              width: "80%",
              padding: "5px",
              marginTop: "30px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/membara.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Membara</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Capai Runtuan 3 Hari
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/orang bijak.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Orang Bijak</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Dapatkan 500 kata dalam satu khursus
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/sarjana.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Sarjana</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Pelajari 500 kata dalam satu khursus
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/juara.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Juara</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Buka Papan Skor dengan menyelesaikan 10 pelajaran
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/MenembakJitu.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Menembak Jitu</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Selesaikan 1 pelajaran tanpa kesalahan
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/orang bijak.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Pemenang</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Raih peringkat #1 di papan skormu
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/legendaris.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Legendaris</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Raih peringkat #1 di Liga Berlian
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/supel.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Supel</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Ikuti 3 teman
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/kesatria akhir minggu.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "15px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Kesatria Akhir Minggu</h2>
                <div style={{ display: "flex" }}>
                  <BorderLinearProgress variant="determinate" value={100} />
                  <span style={{ marginLeft: "20px" }}>2 / 3</span>
                </div>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Selesaikan satu pelajaran di hari Sabtu dan Minggu
                </p>
              </div>
            </div>
          </button>
          <button
            style={{
              width: "80%",
              padding: "5px",
              borderColor: "#BCBCBC",
              backgroundColor: "white",
              marginTop: "-10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ width: "15%" }}>
                <img
                  src="/img/foto genik.png"
                  width="80px"
                  heigth="80px"
                  style={{ marginTop: "8px" }}
                />
                <p style={{ marginTop: "-25px", color: "white" }}>Level 1</p>
              </div>
              <div style={{ width: "85%", display: "grid" }}>
                <h2 style={{ textAlign: "left" }}>Foto Genik</h2>
                <p style={{ textAlign: "left", color: "#BCBCBC" }}>
                  Kamu telah menambahkan foto profil
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
