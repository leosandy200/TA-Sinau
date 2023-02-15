import React from "react";
import { useRouter } from "next/router";

function Lanjutan() {
  const router = useRouter();
  return (
    <div>
      <hr style={{ width: "100%", marginTop: "0px" }} />
      <button
        onClick={() => router.push("/konten")}
        style={{
          width: "8%",
          borderRadius: "5px",
          backgroundColor: "#61E002",
          color: "white",
          border: "none",
          padding: "15px",
          float: "right",
          marginRight: "60px",
          marginTop: "20px",
        }}
      >
        LANJUTAN
      </button>
    </div>
  );
}
export default Lanjutan;
