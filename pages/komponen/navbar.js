import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/navbar.module.css";


const enabled = {
  "/login": true,
  "/register": true,
  "/belajar": true,
  "/profile": true, 
  "/setting": true,
}

const showRightIcon = {
  "/belajar": "PROFILE",
  "/profile": "PROFILE",
  "/login": "PROFILE",
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