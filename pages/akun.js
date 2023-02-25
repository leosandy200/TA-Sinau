import React, { useState, useEffect, useRef, createRef } from "react";
import { useRouter } from "next/router";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";
import global from "../styles/style.module.css";
import akun from "../styles/akun.module.css"
import axios from "axios";
import { userHeader, clearToken } from "../utils/config";
import { ButtonStudy } from "./component/buttonStudy";
import { FormEdit } from "./component/setting/form-edit";
import Lihatprofile from "./komponen/lihatprofilemu";
import Settingfooter from "./komponen/settingfooter";
import Empatbutton from "./komponen/empatbutton";
import { NavbarButtonStudy } from "./component/navbar-button-study";
import { API } from "../utils/request";

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};
// }
const styles = {
  akun,
  global
};

function Setting() {
  const router = useRouter();

  //data dri login

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [selectedMenu, setSelectedMenu] = useState("akun");

  // const handleSubmitUpdate = async (e) => {
  //   e.preventDefault();
  //   console.log(form.current);
  //   const formData = new FormData(form.current);
  //   console.log("ASUUUU");
  //   try {
  //     const res = await axios.post(
  //       "https://api.sinau-bahasa.my.id/users/" + id,
  //       formData,
  //       {}
  //     );
  //     console.log(res);
  //     console.log("P asu");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  const [id, setId] = useState("0");

  useEffect(() => {
    const idUser = localStorage.getItem("data");

    setId(idUser);
  }, [id]);

  const formRef = useRef(null);
  const submitRef = useRef(null);
  let isSent = false;

  useEffect(() => {
    if (!formRef || !submitRef || Number.parseInt(id) <= 0) return;

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

        const test = await API.post(`/users/${id}`, requestBody, headers)
      } catch (error) {
        console.log(error);
      }
    });
  }, [formRef, submitRef, id])

  return (
    <div className={styles.akun["container-profile"]}>
      <NavbarButtonStudy />
      {/* <div className={styles.akun["container-left-buttons"]}>
        <ButtonStudy imgsrc="/img/Belajar.png" text="Belajar" href="/belajar" />
        <ButtonStudy imgsrc="/img/Toko.png" text="Toko" />
      </div> */}
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
