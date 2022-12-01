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
            width: "60%",
            marginTop: "25px",
            position: "relative",
            left: "5%",
          }}
        >
          <div
            style={{
              padding: "25px",
              paddingBottom: "50px",
              backgroundColor: "#58CC02",
              borderRadius: "20px",
              width: "80%",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  margin: "0",
                }}
              >
                Unit 1
              </h2>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#58CC02",
                  borderColor: "white",
                  borderRadius: "10px",
                  width: "25%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <BookIcon style={{ color: "white", marginTop: "8px" }} />
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Buku Panduan
                </p>
              </button>
            </div>
            <h3
              style={{
                float: "left",
                marginTop: "10px",
              }}
            >
              Memahami Frasa Dasar
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/star.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/lock.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/Bonus.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/book.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "75px" }}
            />
            <img
              src="/img/piala.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/kunci.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              padding: "25px",
              paddingBottom: "50px",
              marginTop: "50px",
              backgroundColor: "#B94CFF",
              borderRadius: "20px",
              width: "80%",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  margin: "0",
                }}
              >
                Unit 2
              </h2>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#B94CFF",
                  borderColor: "white",
                  borderRadius: "10px",
                  width: "25%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <BookIcon style={{ color: "white", marginTop: "8px" }} />
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Buku Panduan
                </p>
              </button>
            </div>
            <h3
              style={{
                float: "left",
                marginTop: "10px",
              }}
            >
              Memahami Frasa Dasar
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/starungu.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/lock.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/Bonus.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/book.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "75px" }}
            />
            <img
              src="/img/piala.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/kunci.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              padding: "25px",
              paddingBottom: "50px",
              backgroundColor: "#00E0AB",
              borderRadius: "20px",
              width: "80%",
              color: "white",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  margin: "0",
                }}
              >
                Unit 3
              </h2>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#00E0AB",
                  borderColor: "white",
                  borderRadius: "10px",
                  width: "25%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <BookIcon style={{ color: "white", marginTop: "8px" }} />
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Buku Panduan
                </p>
              </button>
            </div>
            <h3
              style={{
                float: "left",
                marginTop: "10px",
              }}
            >
              Memahami Frasa Dasar
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/starTosca.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/lock.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/Bonus.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/book.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "75px" }}
            />
            <img
              src="/img/piala.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/kunci.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              padding: "25px",
              paddingBottom: "50px",
              backgroundColor: "#58CC02",
              borderRadius: "20px",
              width: "80%",
              color: "white",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  margin: "0",
                }}
              >
                Unit 4
              </h2>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#58CC02",
                  borderColor: "white",
                  borderRadius: "10px",
                  width: "25%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <BookIcon style={{ color: "white", marginTop: "8px" }} />
                <p
                  style={{
                    color: "white",
                  }}
                >
                  Buku Panduan
                </p>
              </button>
            </div>
            <h3
              style={{
                float: "left",
                marginTop: "10px",
              }}
            >
              Memahami Frasa Dasar
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/star.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/lock.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/Bonus.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              position: "relative",
              left: "5%",
            }}
          >
            <img
              src="/img/book.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "75px" }}
            />
            <img
              src="/img/piala.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
            <img
              src="/img/kunci.png"
              height="80px"
              width="80px"
              style={{ marginLeft: "80px" }}
            />
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
