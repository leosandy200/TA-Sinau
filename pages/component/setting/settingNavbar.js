import React, { useState } from "react";
import styles from "../setting/settingnavbar.module.css";

import { useRouter } from "next/router";

function SettingNavbar() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("akun");
  return (
    <div>
      <button className={styles.buttonprofile}>
        <div className={styles.div1}>
          <img src="/img/Profile.png" className={styles.imgprofile} />
          <div className={styles.div28}>
            <p className={styles.namaprofile}>LeoSandy</p>
            <p onClick={() => router.push("/profile")} className={styles.lihatprofile}>
              Lihat Profilmu
            </p>
          </div>
        </div>
        <div onClick={() => router.push("/akun")}>
          <div
            className={styles.akun}
            onClick={() => setSelectedMenu("akun")}
            style={{
              backgroundColor: selectedMenu === "akun" ? "#D9D9D9" : "white",
              color: selectedMenu === "akun" ? "white" : "black",
            }}
          >
            Akun
          </div>
        </div>
        {/* <div onClick={() => router.push("/aturkursus")}>
          <div
            className={styles.akun}
            onClick={() => setSelectedMenu("aturkursus")}
            style={{
              backgroundColor:
                selectedMenu === "aturkursus" ? "#D9D9D9" : "white",
              color: selectedMenu === "aturkursus" ? "white" : "black",
            }}
          >
            Atur Kursus
          </div>
        </div> */}
        <div onClick={() => router.push("/katasandi")}>
          <div
            className={styles.akun}
            onClick={() => setSelectedMenu("katasandi")}
            style={{
              backgroundColor:
                selectedMenu === "katasandi" ? "#D9D9D9" : "white",
              color: selectedMenu === "katasandi" ? "white" : "black",
            }}
          >
            Kata Sandi
          </div>
        </div>
        {/* <div onClick={() => router.push("/notifikasi")}>
          <div
            className={styles.akun}
            onClick={() => setSelectedMenu("notifikasi")}
            style={{
              backgroundColor:
                selectedMenu === "notifikasi" ? "#D9D9D9" : "white",
              color: selectedMenu === "notifikasi" ? "white" : "black",
            }}
          >
            Notifikasi
          </div>
        </div> */}
        {/* w */}
      </button>
    </div>
  );
}
export default SettingNavbar;
