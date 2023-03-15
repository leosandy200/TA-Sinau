import axios from "axios";
import styles from '../styles/belajar.module.css';

export const API = axios.create({
    baseURL: "https://api.sinau-bahasa.my.id"
});