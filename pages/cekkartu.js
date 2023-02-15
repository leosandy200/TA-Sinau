import React, { useEffect, useState } from "react";
import styles from "../styles/style.module.css";
import { width } from "@mui/system";
import { questionAndAnswer } from "./konten";
import { useRouter } from "next/router";

function Cekkartu() {
  const router = useRouter();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const localResult = JSON.parse(localStorage.getItem("result") || "[]");
    if (localResult.length < 1) {
      const emptyAnswer = questionAndAnswer.map(() => undefined);
      setResult(emptyAnswer);
      return;
    }
    setResult(localResult);
  }, []);

  return (
    <div>
      <h1 className={styles.h1cekkartu}>Cek Kartu Skormu</h1>
      <h2 className={styles.h2cekkartu}>
        Klik kotak - kotak dibawah ini untuk membuka soalnya
      </h2>
      <div className={styles.divcekkartu}>
        {questionAndAnswer.map((item, index) => {
          if (!result[index] || item.correctAnswer !== result?.[index]) {
            return (
              <button key={index} className={styles.buttonsalah}>
                <h3 className={styles.h3salah}>{item.question}</h3>
                <img
                  className={styles.imgcekkartu}
                  src="img/salah.png"
                  height="30px"
                  width="30px"
                />
              </button>
            );
          }
          return (
            <button key={index} className={styles.buttoncekkartu}>
              <h3 className={styles.h3cekkartu}>{item.question}</h3>
              <img
                className={styles.imgcekkartu}
                src="/img/Keren.png"
                height="30px"
                width="30px"
              />
            </button>
          );
        })}
      </div>
      <button
        onClick={() => router.push("/menang1")}
        className={styles.buttonlanjutan}
        style={{ marginTop: "50px" }}
      >
        LANJUTAN
      </button>
    </div>
  );
}
export default Cekkartu;
