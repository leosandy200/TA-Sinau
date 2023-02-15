import React from "react";
import { useRouter } from "next/router";

function Periksa() {
  const router = useRouter();
  return (
    <div>
      <hr style={{ width: "100%" }} />
      <div style={{ justifyContent: "space-around", display: "flex" }}>
        <button
          onClick={() => router.push("/konten")}
          style={{
            width: "8%",
            borderRadius: "5px",
            backgroundColor: "white",
            color: "#848484",
            border: "none",
            padding: "15px",
            marginTop: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          LOMPATI
        </button>
        <button
          onClick={() => router.push("/hasil1")}
          style={{
            width: "8%",
            borderRadius: "5px",
            backgroundColor: "#848484",
            color: "white",
            border: "none",
            padding: "15px",
            marginRight: "60px",
            marginTop: "20px",
          }}
        >
          PERIKSA
        </button>
      </div>
    </div>
  );
}
export default Periksa;
