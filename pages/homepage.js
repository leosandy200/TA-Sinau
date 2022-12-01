import React from "react";
import { useRouter } from "next/router";

function Homepage() {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#043F75",
      }}
    >
      <img
        src="/img/LogoTA.png"
        height="40px"
        width="150px"
        style={{ marginTop: "50px", marginLeft: "50px" }}
      />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/img/LogoHome.png"
          width="350px"
          style={{ marginTop: "80px", marginBottom: "120px" }}
        />
        <div>
          <h2
            style={{ color: "white", marginLeft: "100px", marginTop: "220px" }}
          >
            Cara Belajar Bahasa Gratis & Menyenangkan
          </h2>
          <button
            onClick={() => router.push("/login")}
            style={{
              width: "60%",
              marginLeft: "150px",
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "#5594F3",
              color: "white",
              borderRadius: "20px",
              border: "none",
              fontSize: "18px",
            }}
          >
            Mulai
          </button>
          <button
            onClick={() => router.push("/register")}
            style={{
              backgroundColor: "#043F75",
              width: "60%",
              marginLeft: "150px",
              marginTop: "20px",
              padding: "12px",
              color: "white",
              borderRadius: "20px",
              borderColor: "white",
              fontSize: "18px",
            }}
          >
            Buat Akun
          </button>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
