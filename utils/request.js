import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.sinau-bahasa.my.id"
});