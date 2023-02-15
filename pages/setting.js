import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Switch from "@mui/material/Switch";
import styles from "../styles/style.module.css";
import axios from "axios";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Setting() {
  const router = useRouter();

  const [token, setUserToken] = useState([]);

  const [id, setId] = useState([]);



  useEffect(() => {
    const tokenUser = localStorage.getItem('token');
    const idUser = localStorage.getItem('data');

    setId(idUser)
    setUserToken(tokenUser)
    // console.log("asu")
  }, []);


  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("akun");

  // console.log(userId)

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://api.sinau-bahasa.my.id/api/logout',
  //       ({userId}),
  //       {
  //         headers: {
  //           'Accept': 'application/json',
  //           'Authorization': userId
  //         }
  //       }
  //     );

  //   // localStorage.removeItem('data');
  //   // localStorage.removeItem('token');
  //   // router.push("/")

  //   } catch (error) {

  //   }
  // }

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://api.sinau-bahasa.my.id/api/logout', undefined,
        {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        },
      );
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      router.push("/");

    } catch (error) {
      console.log(error)
    }
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
        <nav
          className={styles.nav}
        >
          <img className={styles.logoindonesia} src="/img/indonesia.png" />
          <img className={styles.logofire} src="/img/fire.png" />
          <img className={styles.logodiamond} src="/img/diamond.png" />
          <img className={styles.logoprofile} src="/img/profile.png" onClick={() => router.push("/profile")} />
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
          className={styles.div3}
        >
          <h1>Akun</h1>
          <div className={styles.div22}>
            <p className={styles.fotoprofile}>Foto Profile</p>
            <button className={styles.buttonpilihberkas}>Pilih Berkas</button>
          </div>
          <p
            className={styles.tidakadaberkas}
          >
            Tidak ada berkas dipilih
          </p>
          <p
            className={styles.tidakadaberkas}
          >
            Ukuran gambar maksimum adalah 1 MB
          </p>
          <div className={styles.div22}>
            <p
              className={styles.nama}
            >
              Nama
            </p>
            <form action="" method="post">
              <input
                className={styles.input}
                type="text"
                placeholder="Leosandy Wahyu"
              />
            </form>
          </div>
          <div className={styles.div23}
          >
            <p
              className={styles.namapengguna}
            >
              Nama Pengguna
            </p>
            <form action="" method="post">
              <input
                className={styles.input}
                type="text"
                placeholder="Leosandy"
              />
            </form>
          </div>
          <div
            className={styles.div23}
          >
            <p
              className={styles.email}
            >
              Email
            </p>
            <form action="" method="post">
              <input
                className={styles.input}
                type="text"
                placeholder="Leosandy@gmail.com"
              />
            </form>
          </div>
          <p className={styles.blomverifiakasi}
          >
            Email belum diverifikasi. Verifikasi Sekarang
          </p>
          <button className={styles.buttonsimpanperubahan2}>
            <p>Simpan Perubahan</p>
          </button>
          <div className={styles.div24}>
            <div className={styles.div1}>
              <p className={styles.masukfacebook}
              >
                Hubungkan Ke Facebook
              </p>
              <div className={styles.div24}>
                <Switch {...label} defaultChecked />
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.div24}>
                <Switch {...label} defaultChecked />
              </div>
              <p
                className={styles.masukfacebook}
              >
                hubungkan ke Google +
              </p>
            </div>
          </div>
          <div className={styles.div24}>
            <div className={styles.div1}>
              <p className={styles.efeksuara}
              >
                Efek Suara
              </p>
              <div className={styles.div24}>
                <Switch {...label} defaultChecked />
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.div24}>
                <Switch {...label} defaultChecked />
              </div>
              <p
                className={styles.masukfacebook}
              >
                Animasi
              </p>
            </div>
          </div>
          <div className={styles.div24}>
            <div className={styles.div1}>
              <p className={styles.latihanmendengar}
              >
                Latihan Mendengar
              </p>
              <div className={styles.div24}>
                <Switch {...label} defaultChecked />
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.div24}>
                <Switch {...label} defaultChecked />
              </div>
              <p
                className={styles.masukfacebook}
              >
                Pesan Notifikasi
              </p>
            </div>
          </div>
          <hr className={styles.hr}
          />
          <div
            className={styles.div25}
          >
            <p className={styles.tentang}>Tentang</p>
            <p className={styles.tentang}>Sekolah</p>
            <p className={styles.tentang}>Aplikasi</p>
            <p className={styles.tentang}>Toko</p>
            <p className={styles.tentang}>Efikasi</p>
            <p className={styles.tentang}>Bantuan</p>
          </div>
          <div
            className={styles.div26}
          >
            <p className={styles.tentang}>Panduan </p>
            <p className={styles.tentang}>Karier</p>
            <p className={styles.tentang}>Invertor</p>
            <p className={styles.tentang}>Ketentuan</p>
            <p className={styles.tentang}>Privasi</p>
          </div>
        </div>
        <div
          className={styles.div27}
        >
          <button className={styles.buttonsimpanperubahan}>
            <p>Simpan Perubahan</p>
          </button>
          <br />
          <button className={styles.buttonprofile}>
            <div className={styles.div1}>
              <img
                src="/img/Profile.png"
                width="50px"
                height="50px"
                className={styles.imgprofile}
              />
              <div className={styles.div28}
              >
                <p className={styles.namaprofile}>LeoSandy</p>
                <p onClick={() => router.push("/profile")}
                  className={styles.lihatprofile}>
                  Lihat Profilmu
                </p>
              </div>
            </div>
            <div
              className={styles.akun}
              onClick={() => setSelectedMenu("akun")}
              style={{
                backgroundColor: selectedMenu === "akun" ? "#D9D9D9" : "white",
              }}
            >
              Akun
            </div>
            <div
              className={styles.akun}
              onClick={() => setSelectedMenu("aturkhusus")}
              style={{
                backgroundColor:
                  selectedMenu === "aturkhusus" ? "#D9D9D9" : "white",
              }}
            >
              Atur Khusus
            </div>
            <div
              className={styles.akun}
              onClick={() => setSelectedMenu("katasandi")}
              style={{
                backgroundColor:
                  selectedMenu === "katasandi" ? "#D9D9D9" : "white",
              }}
            >
              Kata Sandi
            </div>
            <div
              className={styles.akun}
              onClick={() => setSelectedMenu("notifikasi")}
              style={{
                backgroundColor:
                  selectedMenu === "notifikasi" ? "#D9D9D9" : "white",
              }}
            >
              Notifikasi
            </div>
            <div
              className={styles.akun}
              onClick={() => setSelectedMenu("edittarget")}
              style={{
                backgroundColor:
                  selectedMenu === "edittarget" ? "#D9D9D9" : "white",
              }}
            >
              Edit Target Harian
            </div>
            <div
              className={styles.akun}
              onClick={() => setSelectedMenu("privasi")}
              style={{
                backgroundColor:
                  selectedMenu === "privasi" ? "#D9D9D9" : "white",
                marginBottom: "20px",
              }}
            >
              Privasi
            </div>
          </button>
          <button className={styles.buttonkeluar} onClick={handleLogout}>KELUAR</button>
          <button className={styles.buttonexpordata}>EXPOR DATA</button>
          <button className={styles.buttonkeluar}>NONAKTIFKAN AKUN</button>
          <button className={styles.buttonhapusakun}>HAPUS AKUN</button>
        </div>
      </div>
    </div>
  );
}
export default Setting;
