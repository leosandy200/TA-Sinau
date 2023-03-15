import React, { useState, useEffect, useRef, createRef, useContext } from "react";
import { useRouter } from "next/router";
import global from "../styles/style.module.css";
import akun from "../styles/akun.module.css"
import { FormEdit } from "./component/setting/form-edit";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";
import Empatbutton from "./komponen/empatbutton";
import { NavbarButtonStudy } from "./component/navbar-button-study";
import { API } from "../utils/request";
import { FormContext, ProfileContext } from "../utils/context";

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};
// }
const styles = {
  akun,
  global
};

function Setting() {
  const router = useRouter();
  const [dataUser, setDataUser] = useContext(ProfileContext);

  const formRef = useRef(null);
  const submitRef = useRef(null);
  let isSent = false;

  useEffect(() => {
    if (!formRef || !submitRef || !dataUser || !dataUser.id) return;
    if (dataUser.id <= 0) {
      router.push("/login")
      return;
    }

    if (isSent) return;
    isSent = true;

    submitRef.current.addEventListener('click', async () => {
      try {
        const requestBody = new FormData(formRef.current)
        const headers = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
        const kirimData = await API.post(`/users/${dataUser.id}`, requestBody, headers)
        if (kirimData.status != 200) return;

        const curiData = await API.get(`/users/${dataUser.id}`, headers)
        const gantiDataUser = curiData?.data?.data

        localStorage.setItem("data", JSON.stringify(gantiDataUser))
        setDataUser(gantiDataUser)
        router.push("/profile")
      } catch (error) {
        console.log(error);
      }
    });
  }, [formRef, submitRef, dataUser])

  return (
    <div className={styles.akun["container-profile"]}>
      <NavbarButtonStudy />
      <div className={styles.akun["container-settings"]}>
        <div className={styles.akun["container-right"]}>
          <h1 className={styles.akun["akun-text-style"]}>Akun</h1>
          <div>
            <FormEdit ref={formRef} />
          </div>
          {/* <div className={styles.global.div24}>
              </div>
              <div className={styles.global.div24}>
                <div className={styles.global.div1}>
                  <p className={styles.global.efeksuara}>Efek Suara</p>
                  <div className={styles.global.div24}>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
                <div className={styles.global.div1}>
                  <div className={styles.global.div24}>
                    <Switch {...label} defaultChecked />
                  </div>
                  <p className={styles.global.masukfacebook}>Animasi</p>
                </div>
              </div>
              <div className={styles.global.div24}>
                <div className={styles.global.div1}>
                  <p className={styles.global.latihanmendengar}>Latihan Mendengar</p>
                  <div className={styles.global.div24}>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
                <div className={styles.global.div1}>
                  <div className={styles.global.div24}>
                    <Switch {...label} defaultChecked />
                  </div>
                  <p className={styles.global.masukfacebook}>Pesan Notifikasi</p>
                </div>
              </div>
              <hr className={styles.global.hr} />
              <Settingfooter /> */}
        </div>
        <div>
          <button ref={submitRef} className={styles.akun["simpan-button-style"]}>
            <p>Simpan Perubahan</p>
          </button>
          <Lihatprofile />
          <Empatbutton />
        </div>
      </div>
    </div>
  );
}
export default Setting;
