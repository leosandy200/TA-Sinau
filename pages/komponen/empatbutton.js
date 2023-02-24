import React, { useState } from "react";
import styles from "../../styles/style.module.css";

function Lihatprofile() {
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
      <button className={styles.buttonkeluar} onClick={handleLogout}>
        KELUAR
      </button>
      <button className={styles.buttonexpordata}>EXPOR DATA</button>
      <button className={styles.buttonkeluar}>NONAKTIFKAN AKUN</button>
      <button className={styles.buttonhapusakun}>HAPUS AKUN</button>
    </div>
  );
}
export default Lihatprofile;
