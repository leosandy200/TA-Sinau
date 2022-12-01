import React from "react";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  return (
    <div>
      <header
        style={{
          backgroundColor: "#043F75",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/img/LogoTA.png"
          height="20px"
          width="90px"
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            marginLeft: "50px",
          }}
        />
      </header>
      <button
        onClick={() => router.push("/register")}
        style={{
          borderColor: "#A4A4A4",
          padding: "12px",
          width: "10%",
          borderRadius: "20px",
          color: "#3689D7",
          float: "right",
          backgroundColor: "white",
          marginTop: "20px",
          marginRight: "20px",
          fontWeight: "700",
        }}
      >
        DAFTAR
      </button>
      <br />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>MASUK</h1>
        <button
          style={{
            backgroundColor: "#F3F3F3",
            borderColor: "#A4A4A4",
            color: "#7D7D7D",
            padding: "15px",
            width: "25%",
            borderRadius: "20px",
            textAlign: "left",
            fontSize: "15px",
            marginTop: "20px",
          }}
        >
          Email or Username
        </button>{" "}
        <br />
        <button
          style={{
            backgroundColor: "#F3F3F3",
            borderColor: "#A4A4A4",
            color: "#7D7D7D",
            padding: "15px",
            width: "25%",
            borderRadius: "20px",
            textAlign: "left",
            fontSize: "15px",
            marginTop: "20px",
          }}
        >
          Password <span style={{ float: "right" }}>LUPA?</span>
        </button>
        <br />
        <button
          onClick={() => router.push("/belajar")}
          style={{
            backgroundColor: "#3689D7",
            borderColor: "#3689D7",
            color: "white",
            padding: "15px",
            width: "25%",
            borderRadius: "20px",
            fontSize: "15px",
            marginTop: "20px",
          }}
        >
          Masuk
        </button>
        <br />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <hr
            style={{
              width: "9%",
              height: "0px",
              backgroundColor: "#7D7D7D",
              marginTop: "30px",
              marginRight: "30px",
            }}
          />
          <p style={{ fontSize: "18px", fontWeight: "700" }}>ATAU</p>
          <hr
            style={{
              width: "9%",
              height: "0px",
              backgroundColor: "#7D7D7D",
              marginTop: "30px",
              marginLeft: "30px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              display: "flex",
              width: "12%",
              borderColor: "#7D7D7D",
              backgroundColor: "white",
              borderRadius: "20px",
              justifyContent: "center",
              height: "50px",
            }}
          >
            <img src="/img/Facebook.png" style={{ marginTop: "5px" }} />
            <p
              style={{
                fontSize: "15px",
                color: "#3B5998",
                fontWeight: "700",
                marginLeft: "5px",
              }}
            >
              Facebook
            </p>
          </button>
          <button
            style={{
              display: "flex",
              width: "12%",
              borderColor: "#7D7D7D",
              backgroundColor: "white",
              borderRadius: "20px",
              justifyContent: "center",
              height: "50px",
              marginLeft: "20px",
            }}
          >
            <img src="/img/Google.png" style={{ marginTop: "5px" }} />
            <p
              style={{
                fontSize: "15px",
                color: "#4285F4",
                fontWeight: "700",
                marginLeft: "5px",
              }}
            >
              Google
            </p>
          </button>
        </div>
        <p style={{ marginTop: "20px", color: "#7D7D7D" }}>
          By signing in to Duolingo, you agree to our <b>Terms</b> <br /> and
          <b>Privacy Policy.</b>
        </p>
      </div>
    </div>
  );
}
export default Login;
