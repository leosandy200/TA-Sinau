import React, { useState, useContext } from "react";
import styles from "../setting/buttons.module.css"
import axios from "axios";
import Router, { useRouter } from "next/router";
import { API } from "../../../utils/request";
import { ProfileContext } from "../../../utils/context";
import { Button } from "@mui/material";

function Buttons() {

  const router = useRouter();
  const [dataUser, setDataUser] = useContext(ProfileContext);

  const handleLogout = async () => {

    try {
      const Logout = await API.post("/logout", undefined,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`

          },
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("data");

      router.push("/");

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    console.log(dataUser.id);

    if (!dataUser.id) return;

    try {

      const Delete = await API.delete(`/users/${dataUser.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
      console.log(Delete)

      
      localStorage.removeItem("token");
      localStorage.removeItem("data");

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
      <button className={styles.buttonhapusakun} onClick={handleDelete}>
        HAPUS AKUN
      </button>
    </div>
  );
}
export default Buttons;
