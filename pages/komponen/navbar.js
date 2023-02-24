import { useRouter, useEffect, useState } from "next/router";
import React from "react";
import styles from "../../styles/navbar.module.css";
import axios from "axios";

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
  "/login": "PROFILE",
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

  if (!enabled[useRouter().pathname]) return null;

  function rightElement() { 
    switch (showRightIcon[useRouter().pathname]) {
      case "PROFILE":
        return (<div className={styles.icons}>
          <img src="/img/fire.png" />
          <p></p>
          <img src="/img/diamond.png" />
          <img src="/img/profile.png" onClick={() => router.push("/profile ")} />
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
