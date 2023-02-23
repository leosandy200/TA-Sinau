import React, { useState } from "react";
import styles from "../../styles/style.module.css";
import { useRouter } from "next/router";

function Lihatprofile() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("akun");
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://api.sinau-bahasa.my.id/logout",
        undefined,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      axios.defaults.headers["Authorization"] = undefined;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className={styles.buttonprofile}>
        <div className={styles.div1}>
          <img src="/img/Profile.png" className={styles.imgprofile} />
          <div className={styles.div28}>
            <p className={styles.namaprofile}>LeoSandy</p>
            <p
              onClick={() => router.push("/profile")}
              className={styles.lihatprofile}
            >
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
        <div onClick={() => router.push("/aturkursus")}>
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
        </div>
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
        <div onClick={() => router.push("/notifikasi")}>
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
        </div>
        <div onClick={() => router.push("/edittargetharian")}>
          <div
            className={styles.akun}
            onClick={() => setSelectedMenu("edittarget")}
            style={{
              backgroundColor:
                selectedMenu === "edittarget" ? "#D9D9D9" : "white",
              color: selectedMenu === "edittarget" ? "white" : "black",
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
              backgroundColor: selectedMenu === "privasi" ? "#D9D9D9" : "white",
              color: selectedMenu === "privasi" ? "white" : "black",
              marginBottom: "20px",
            }}
          >
            Privasi
          </div>
        </div>
      </button>
    </div>
  );
}
export default Lihatprofile;
