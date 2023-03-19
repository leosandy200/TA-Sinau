import React, { useState, useEffect, useRef, createRef, useContext } from "react";
import { useRouter } from "next/router";
import global from "../../styles/style.module.css";
import akun from "../../styles/akun.module.css"
import Settingfooter from "../komponen/settingfooter";
import { API } from "../../utils/request";
import { ProfileContext } from "../../utils/context";
import { NavbarButtonStudy } from "../component/navbar-button-study";
import { FormEdit } from "../component/setting/form-edit";
import Buttons from "../component/setting/buttons";
import SettingNavbar from "../component/setting/settingNavbar";

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

  const [buttonElement, setButtonElement] = useState
    (<button ref={submitRef} className={styles.akun["simpan-button-style-ready"]}>
      <p className={styles.akun["simpan-button-text-style"]}>Simpan Perubahan</p>
    </button>)

  useEffect(() => {
    if (!router.isReady) return;
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
      // button loading
        setButtonElement(<button aria-busy="true" className={styles.akun["simpan-button-style-grey"]}>
        </button>)
        const kirimData = await API.post(`/users/${dataUser.id}`, requestBody, headers)
        if (kirimData.status != 200) return;

        // button set grey dan mati ref
        setButtonElement(<button ref={submitRef} className={styles.akun["simpan-button-style-grey"]}>
          <p className={styles.akun["simpan-button-text-style"]}>Perubahan Tersimpan</p>
        </button>)

        const curiData = await API.get(`/users/${dataUser.namaUser}`, headers)
        const gantiDataUser = curiData?.data?.data

        localStorage.setItem("data", JSON.stringify(gantiDataUser))
        setDataUser(gantiDataUser)
        // router.push(`/profile/${dataUser.namaUser}`)
      } catch (error) {
        console.log(error);
      }
    });

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

  }, [formRef, submitRef, dataUser])

  return (
    <div className={styles.akun["container-profile"]}>
      <NavbarButtonStudy />
      <div className={styles.akun["container-settings"]}>
        <div className={styles.akun["container-right"]}>
          <h1 className={styles.akun["akun-text-style"]}>Akun</h1>
          <div className={styles.akun["container-form"]}>
            <FormEdit ref={formRef} />
          </div>
        </div>
        <div className={styles.akun["container-setting-navbar"]}>
          {/* <button ref={submitRef} className={styles.akun["simpan-button-style-ready"]}>
            <p className={styles.akun["simpan-button-text-style"]}>Simpan Perubahan</p>
          </button> */}
          {buttonElement}
          <SettingNavbar />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
export default Setting;
