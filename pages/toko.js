import React from "react";
import BookIcon from "@mui/icons-material/Book";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useRouter } from "next/router";

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
              width: "80%",
              backgroundColor: "white",
              border: "none",
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
              width: "80%",
              backgroundColor: "#B7D8F7",
              color: "#369DD7",
              borderColor: "#369DD7",
              borderRadius: "10px",
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
              <button
                style={{
                  borderRadius: "15px",
                  borderColor: "#EEEEEE",
                  padding: "10px",
                }}
              >
                0 / 2 DIPAKAI
              </button>
              <p>
                Pembeku Runtunan mencegah runtunanmu hilang <br /> meskipun
                tidak beraktivitas selama sehari penuh.
              </p>
            </div>
            <button
              style={{
                borderRadius: "15px",
                borderColor: "#EEEEEE",
                padding: "10px",
                height: "20%",
                backgroundColor: "white",
                color: "#878787",
                textAlign: "center",
              }}
            >
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
              <button
                style={{
                  borderRadius: "15px",
                  borderColor: "#EEEEEE",
                  padding: "10px",
                }}
              >
                0 / 2 DIPAKAI
              </button>
              <p>
                Gandakan taruhan lima lingotmu dengan <br /> mempertahanksn
                runtunan selama tujuh hari.
              </p>
            </div>
            <button
              style={{
                borderRadius: "15px",
                borderColor: "#EEEEEE",
                padding: "10px",
                height: "20%",
                backgroundColor: "white",
                color: "#DE513C",
                textAlign: "center",
                marginLeft: "50px",
                width: "15%",
              }}
            >
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
        <div
          style={{
            width: "30%",
            marginTop: "25px",
            marginRight: "50px",
            marginLeft: "0",
          }}
        >
          <div
            style={{
              border: "1px #878787 solid",
              borderRadius: "20px",
              width: "90%",
            }}
          >
            <img
              src="/img/medal.png"
              height="100px"
              width="200px"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
              }}
            />
            <h3
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Buka Papan Peringkat !
            </h3>
            <p
              style={{
                color: "#878787",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              Lengkapi 5 pelajaran lagi untuk memulai kompetisi
            </p>
          </div>
          <div
            style={{
              border: "1px #878787 solid",
              borderRadius: "20px",
              width: "90%",
              marginTop: "25px",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
                marginRight: "20px",
                fontWeight: "bold",
              }}
            >
              <p>Progress XP</p>
              <p style={{ color: "#369DD7" }}>EDIT TARGET</p>
            </div>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <img src="/img/Harta Karun.png" height="50px" width="50px" />
              <p
                style={{
                  marginLeft: "20px",
                  color: "#BCBCBC",
                  marginTop: "0px",
                }}
              >
                Target Harian
              </p>
            </div>
            <div style={{ display: "flex", marginTop: "-15px" }}>
              <BorderLinearProgress variant="determinate" value={100} />
              <p
                style={{
                  marginLeft: "10px",
                  color: "#BCBCBC",
                  marginTop: "-5px",
                  fontSize: "12px",
                }}
              >
                24 / 10 XP
              </p>
            </div>
          </div>
          <div
            style={{
              border: "1px #878787 solid",
              borderRadius: "20px",
              width: "90%",
              marginTop: "25px",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
                marginRight: "20px",
                fontWeight: "bold",
              }}
            >
              <p>Pencapaian Selanjutnya</p>
              <p style={{ color: "#369DD7" }}>lihat semua</p>
            </div>
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <img
                src="/img/Pencapaian Selanjutnya.png"
                height="50px"
                width="50px"
              />
              <p
                style={{
                  marginLeft: "20px",
                  color: "#BCBCBC",
                  marginTop: "0px",
                }}
              >
                Target Harian
              </p>
            </div>
            <div style={{ display: "flex", marginTop: "-15px" }}>
              <BorderLinearProgress variant="determinate" value={100} />
              <p
                style={{
                  marginLeft: "10px",
                  color: "#BCBCBC",
                  marginTop: "-5px",
                  fontSize: "12px",
                }}
              >
                24 / 10 XP
              </p>
            </div>
          </div>
          <div
            style={{
              border: "1px #878787 solid",
              borderRadius: "20px",
              width: "90%",
              marginTop: "25px",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
                marginRight: "20px",
                fontWeight: "bold",
              }}
            >
              <p>Teman</p>
              <p style={{ color: "#369DD7" }}>Total XP</p>
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                marginLeft: "20px",
                paddingTop: "10px",
              }}
            >
              <img src="/img/Icon Teman.png" height="50px" width="50px" />
              <p
                style={{
                  marginLeft: "20px",
                  color: "#878787",
                  marginTop: "10px",
                }}
              >
                Leosandy Wahyu Rismono
              </p>
              <p
                style={{
                  marginLeft: "20px",
                  color: "#878787",
                  marginTop: "10px",
                }}
              >
                0 XP
              </p>
            </div>
            <hr />
            <button
              style={{
                padding: "10px",
                width: "40%",
                borderRadius: "10px",
                fontSize: "15px",
                borderColor: "#878787",
                marginLeft: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#878787",
              }}
            >
              Undang
            </button>
            <button
              style={{
                padding: "10px",
                width: "40%",
                borderRadius: "10px",
                fontSize: "15px",
                borderColor: "#878787",
                marginLeft: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#878787",
              }}
            >
              Seacrh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Belajar;
