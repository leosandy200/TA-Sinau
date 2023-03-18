import React, { useState, useContext } from "react";
import styles from "../setting/settingnavbar.module.css";
import { ProfileContext } from "../../../utils/context";

import { useRouter } from "next/router";

function SettingNavbar() {
  const router = useRouter();

  const [dataUser, setDataUser] = useContext(ProfileContext);

  const { username } = router.query

  return (
    <div className={styles["container"]}>
      <div className={styles["container-profile"]}>
        <div className={styles.div1}>
          <img src={(dataUser?.avatar) ? dataUser?.avatar : "/icons/prifle-user.svg"} className={styles.imgprofile} />
          <div className={styles.div28}>
            <p className={styles.namaprofile}>{dataUser?.namaUser}</p>
            <p onClick={() => router.push(`/profile/${dataUser.namaUser}`)} className={styles.lihatprofile}>
              Lihat Profilmu
            </p>
          </div>
        </div>
        <div onClick={() => router.push("/pengaturan/akun")}>
          <div className={(router.asPath !== '/pengaturan/akun') ? styles["navbar-text"] : styles["navbar-text-background"]}>
            Akun
          </div>
        </div>
        <div onClick={() => router.push("/pengaturan/password")}>
          <div className={(router.asPath !== '/pengaturan/password') ? styles["navbar-text"] : styles["navbar-text-background"]} >
            Kata Sandi
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingNavbar;
