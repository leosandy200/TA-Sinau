import React, { useState } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Switch from "@mui/material/Switch";
import styles from "../styles/style.module.css";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
}

function Privasi() {
  const router = useRouter();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("privasi");

  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logota}
          src="/img/LogoTA.png"
          height="20px"
          width="90px"
        />
        <nav className={styles.nav}>
          <img className={styles.logoindonesia} src="/img/indonesia.png" />
          <img className={styles.logofire} src="/img/fire.png" />
          <img className={styles.logodiamond} src="/img/diamond.png" />
          <img className={styles.logoprofile} src="/img/profile.png" />
        </nav>
      </header>
      <div className={styles.div1}>
        <div className={styles.div2}>
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
            <p className={styles.pbelajar}>Belajar</p>
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
            <p className={styles.pbelajar}>Toko</p>
          </button>
        </div>
        <div className={styles.div3}>
          <h1>Privasi</h1>
          <input type="checkbox" className={styles.checkboxprivasi} />
          <label className={styles.labelprivasi}>Buat profilku publik</label>
          <br />
          <p className={styles.pprivasi}>
            Agar orang lain bisa menemukan profilmu dan mengikutimu, <br /> agar
            kamu bisa mengikuti orang lain,
            <br /> agar kamu bisa masuk di papan skor publik
          </p>
          <input type="checkbox" className={styles.checkboxprivasi} />
          <label className={styles.labelprivasi}>
            Aktifkan diskusi kalimat
          </label>
          <br />
          <p className={styles.pprivasi}>Melihat diskusi kalimat</p>
          <input type="checkbox" className={styles.checkboxprivasi} />
          <label className={styles.labelprivasi}>
            Iklan yang dipersonalisasi
          </label>
          <br />
          <p className={styles.pprivasi}>Melacak dan menyesuaikan iklan</p>
          <hr className={styles.hrprivasi} />
          <div className={styles.div52}>
            <p className={styles.tentang}>Tentang</p>
            <p className={styles.tentang}>Sekolah</p>
            <p className={styles.tentang}>Aplikasi</p>
            <p className={styles.tentang}>Toko</p>
            <p className={styles.tentang}>Efikasi</p>
            <p className={styles.tentang}>Bantuan</p>
          </div>
          <div className={styles.div53}>
            <p className={styles.tentang}>Panduan </p>
            <p className={styles.tentang}>Karier</p>
            <p className={styles.tentang}>Invertor</p>
            <p className={styles.tentang}>Ketentuan</p>
            <p className={styles.tentang}>Privasi</p>
          </div>
        </div>
        <div className={styles.div27}>
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
              <div className={styles.div28}>
                <p className={styles.namaprofile}>LeoSandy</p>
                <p className={styles.lihatprofile}>Lihat Profilmu</p>
              </div>
            </div>
            <div onClick={() => router.push("/setting")}>
              <div
                className={styles.akun}
                onClick={() => setSelectedMenu("akun")}
                style={{
                  backgroundColor:
                    selectedMenu === "akun" ? "#D9D9D9" : "white",
                }}
              >
                Akun
              </div>
            </div>
            <div onClick={() => router.push("/aturkhusus")}>
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
            </div>
            <div onClick={() => router.push("/katasandi")}>
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
            </div>
            <div onClick={() => router.push("/notifikasi")}>
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
            </div>
            <div onClick={() => router.push("/edittargetharian")}>
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
            </div>
            <div onClick={() => router.push("/privasi")}>
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
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Privasi;
