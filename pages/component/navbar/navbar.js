import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../../../utils/context";
import styles from "./navbar.module.css";

const enabled = {
  "/login": true,
  "/register": true,
  "/belajar": true,
  "/profile": true,
  "/akun": true,
  "/aturkursus": true,
  "/katasandi": true,
  "/notifikasi": true,
  "/edittargetharian": true,
  "/privasi": true,
  "/setting": true,
};

const showRightIcon = {
  "/belajar": "PROFILE",
  "/profile": "PROFILE",
  "/akun": "PROFILE",
  "/aturkursus": "PROFILE",
  "/katasandi": "PROFILE",
  "/notifikasi": "PROFILE",
  "/edittargetharian": "PROFILE",
  "/privasi": "PROFILE",
  "/setting": "PROFILE",

};

function Navbar() {
  const router = useRouter();

  const [dataUser, setDataUser] = useContext(ProfileContext);

  if (!enabled[useRouter().pathname]) return null;

  function rightElement() {
    switch (showRightIcon[useRouter().pathname]) {
      case "PROFILE":
        return (<div className={styles.icons}>
          <div className={styles["streak-positioning"]}>
            <img className={styles["icon-style-streak"]} src="/img/fire.png" />
            <p className={styles["streak-count"]}>{dataUser?.streak_count}</p>
          </div>
          {/* <img className={styles["icon-style"]} src="/img/diamond.png" /> */}
          <img className={styles["icon-style-profile"]} src={(dataUser?.avatar) ? dataUser.avatar : '/icons/profile-user.svg'} onClick={() => router.push("/profile ")} />
        </div>);
      default:  
        return null;
    }
  }
  return (
    <nav className={styles.navbar}>
      <h1>SINAU</h1>
      {rightElement()}
    </nav>
  );
}
export default Navbar;
