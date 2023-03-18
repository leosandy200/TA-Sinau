import React, { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import styles from "styles/password.module.css"

import SettingNavbar from "../component/setting/settingNavbar";
import { NavbarButtonStudy } from "../component/navbar-button-study";
import { FormPassword } from "../component/setting/form-password";
import Settingfooter from "../komponen/settingfooter";
import Buttons from "../component/setting/buttons";

import { ProfileContext } from "../../utils/context";
import { API } from "../../utils/request";

function Password() {
  const router = useRouter();
  const [dataUser, setDataUser] = useContext(ProfileContext);

  const formRef = useRef(null);
  const submitRef = useRef(null);
  let isSent = false;

  useEffect(() => {
    if (!formRef || !submitRef || dataUser.id) return;
    if (dataUser.id <= 0) {
      router.push("/login")
      return;
    }

    if (isSent) return;
    isSent = true;

    submitRef.current.addEventListener('click', async () => {
      try {
        const body = new FormData(formRef.current)
        const headers = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
        const kirimPassword = await API.post(`change-password`, body, headers)
      }
    }

    )

  }, [])



  return (
    <div className={styles["container-profile"]}>
      <NavbarButtonStudy />
      <div className={styles["container-settings"]}>
        <div className={styles["container-right"]}>
          <h1 className={styles["akun-text-style"]}>Akun</h1>
          <div className={styles["container-form"]}>
            <FormPassword ref={formRef} />
          </div>
        </div>
        <div className={styles["container-setting-navbar"]}>
          <button className={styles["simpan-button-style"]}>
            <p className={styles["simpan-button-text-style"]}>Simpan Perubahan</p>
          </button>
          <SettingNavbar />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
export default Password;
