import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "./homepage";

export default function Home() {
  // if (localStorage.getItem("token")) {
  //   axios.defaults.headers["Authorization"] = `Bearer ${tokenUser}`
  // }
  return <Homepage />;
}
