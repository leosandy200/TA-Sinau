import React, { useState } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Switch from "@mui/material/Switch";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Setting() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("akun");

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
            width: "50%",
            marginTop: "25px",
            marginBottom: "50px",
            position: "relative",
            left: "5%",
          }}
        >
          <h1>Akun</h1>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            <p style={{ color: "#878787", fontWeight: "600" }}>Foto Profile</p>
            <button
              style={{
                color: "#6BB7FE",
                backgroundColor: "white",
                borderRadius: "10px",
                borderColor: "#BCBCBC",
                padding: "2px",
                width: "20%",
                fontWeight: "600",
                fontSize: "15px ",
                marginLeft: "20px",
              }}
            >
              Pilih Berkas
            </button>
          </div>
          <p
            style={{ color: "#BCBCBC", fontSize: "14px", marginLeft: "155px" }}
          >
            Tidak ada berkas dipilih
          </p>
          <p
            style={{ color: "#BCBCBC", fontSize: "14px", marginLeft: "155px" }}
          >
            Ukuran gambar maksimum adalah 1 MB
          </p>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            <p
              style={{
                color: "#878787",
                fontWeight: "600",
                marginLeft: "45px",
                marginTop: "18px",
              }}
            >
              Nama
            </p>
            <FormControl
              style={{
                marginLeft: "20px",
                backgroundColor: "#EDEDED",
                borderRadius: "10px",
              }}
              sx={{ width: "27ch" }}
            >
              <OutlinedInput placeholder="Nama" />
              <MyFormHelperText />
            </FormControl>
          </div>
          <div
            style={{ display: "flex", marginLeft: "12px", marginTop: "20px" }}
          >
            <p
              style={{
                color: "#878787",
                fontWeight: "600",
                marginTop: "18px",
              }}
            >
              Nama Pengguna
            </p>
            <FormControl
              style={{
                marginLeft: "20px",
                backgroundColor: "#EDEDED",
                borderRadius: "10px",
              }}
              sx={{ width: "27ch" }}
            >
              <OutlinedInput placeholder="Nama" />
              <MyFormHelperText />
            </FormControl>
          </div>
          <div
            style={{ display: "flex", marginLeft: "50px", marginTop: "20px" }}
          >
            <p
              style={{
                color: "#878787",
                fontWeight: "600",
                marginLeft: "45px",
                marginTop: "18px",
              }}
            >
              Email
            </p>
            <FormControl
              style={{
                marginLeft: "20px",
                backgroundColor: "#EDEDED",
                borderRadius: "10px",
              }}
              sx={{ width: "27ch" }}
            >
              <OutlinedInput placeholder="Nama@gmail.com" />
            </FormControl>
          </div>
          <p
            style={{
              color: "#DE513C",
              fontSize: "13px",
              marginLeft: "160px",
              fontWeight: "600",
            }}
          >
            Email belum diverifikasi. Verifikasi Sekarang
          </p>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "#878787",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                Hubungkan Ke Facebook
              </p>
              <div style={{ marginTop: "5px" }}>
                <Switch {...label} defaultChecked />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "5px" }}>
                <Switch {...label} defaultChecked />
              </div>
              <p
                style={{
                  color: "#878787",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                Efek Suara
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "#878787",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginLeft: "12px",
                }}
              >
                Hubungkan ke Google +
              </p>
              <div style={{ marginTop: "5px" }}>
                <Switch {...label} />
              </div>
            </div>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <div style={{ marginTop: "5px" }}>
                <Switch {...label} />
              </div>
              <p
                style={{
                  color: "#878787",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                Animasi
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", marginTop: "20px", marginLeft: "40px" }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{
                  color: "#878787",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                Latihan Mendengar
              </p>
              <div style={{ marginTop: "5px" }}>
                <Switch {...label} defaultChecked />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "5px" }}>
                <Switch {...label} defaultChecked />
              </div>
              <p
                style={{
                  color: "#878787",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginLeft: "5px",
                }}
              >
                Pesan Motivasi
              </p>
            </div>
          </div>
          <hr
            style={{
              width: "60%",
              color: "black",
              marginTop: "50px",
              marginLeft: "50px",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            <p style={{ marginLeft: "30px", color: "#878787" }}>Tentang</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Sekolah</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Aplikasi</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Toko</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Efikasi</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Bantuan</p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "35px",
              marginBottom: "80px",
            }}
          >
            <p style={{ marginLeft: "30px", color: "#878787" }}>Panduan </p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Karier</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Invertor</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Ketentuan</p>
            <p style={{ marginLeft: "30px", color: "#878787" }}>Privasi</p>
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
          <button
            style={{
              width: "40%",
              borderRadius: "15px",
              backgroundColor: "#6BB7FE",
              color: "white",
              border: "none",
              fontWeight: "600",
              marginLeft: "190px",
            }}
          >
            <p>Simpan Perubahan</p>
          </button>
          <br />
          <button
            style={{
              borderColor: "#878787",
              backgroundColor: "white",
              marginTop: "50px",
              borderRadius: "10px",
              width: "85%",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="/img/Profile.png"
                width="50px"
                height="50px"
                style={{ marginTop: "15px", marginLeft: "20px" }}
              />
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                <p style={{ marginLeft: "-15px" }}>LeoSandy</p>
                <p style={{ color: "#6BB7FE", marginLeft: "15px" }}>
                  Lihat Profilmu
                </p>
              </div>
            </div>
            <div
              onClick={() => setSelectedMenu("akun")}
              style={{
                backgroundColor: selectedMenu === "akun" ? "#D9D9D9" : "white",
                width: "85%",
                borderRadius: "20px",
                border: "none",
                textAlign: "left",
                padding: "12px",
                fontWeight: "600",
                marginTop: "10px",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Akun
            </div>
            <div
              onClick={() => setSelectedMenu("aturkhusus")}
              style={{
                backgroundColor:
                  selectedMenu === "aturkhusus" ? "#D9D9D9" : "white",
                width: "85%",
                borderRadius: "20px",
                border: "none",
                textAlign: "left",
                padding: "12px",
                fontWeight: "600",
                marginTop: "10px",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Atur Khusus
            </div>
            <div
              onClick={() => setSelectedMenu("katasandi")}
              style={{
                backgroundColor:
                  selectedMenu === "katasandi" ? "#D9D9D9" : "white",
                width: "85%",
                borderRadius: "20px",
                border: "none",
                textAlign: "left",
                padding: "12px",
                fontWeight: "600",
                marginTop: "10px",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Kata Sandi
            </div>
            <div
              onClick={() => setSelectedMenu("notifikasi")}
              style={{
                backgroundColor:
                  selectedMenu === "notifikasi" ? "#D9D9D9" : "white",
                width: "85%",
                borderRadius: "20px",
                border: "none",
                textAlign: "left",
                padding: "12px",
                fontWeight: "600",
                marginTop: "10px",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Notifikasi
            </div>
            <div
              onClick={() => setSelectedMenu("edittarget")}
              style={{
                backgroundColor:
                  selectedMenu === "edittarget" ? "#D9D9D9" : "white",
                width: "85%",
                borderRadius: "20px",
                border: "none",
                textAlign: "left",
                padding: "12px",
                fontWeight: "600",
                marginTop: "10px",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Edit Target Harian
            </div>
            <div
              onClick={() => setSelectedMenu("privasi")}
              style={{
                backgroundColor:
                  selectedMenu === "privasi" ? "#D9D9D9" : "white",
                width: "85%",
                borderRadius: "20px",
                border: "none",
                textAlign: "left",
                padding: "12px",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "20px",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Privasi
            </div>
          </button>
          <button
            style={{
              backgroundColor: "#6BB7FE",
              color: "white",
              width: "85%",
              padding: "15px",
              borderRadius: "15px",
              border: "none",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            KELUAR
          </button>
          <button
            style={{
              backgroundColor: "#F6F2F2",
              color: "#878787",
              width: "85%",
              padding: "15px",
              borderRadius: "15px",
              border: "none",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            EXPOR DATA
          </button>
          <button
            style={{
              backgroundColor: "#6BB7FE",
              color: "white",
              width: "85%",
              padding: "15px",
              borderRadius: "15px",
              borderRadius: "10px",
              border: "none",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            NONAKTIFKAN AKUN
          </button>
          <button
            style={{
              backgroundColor: "#F6F2F2",
              color: "#DE513C",
              width: "85%",
              padding: "15px",
              borderRadius: "15px",
              border: "none",
              textAlign: "left",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            HAPUS AKUN
          </button>
        </div>
      </div>
    </div>
  );
}
export default Setting;
