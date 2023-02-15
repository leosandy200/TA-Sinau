import React from "react";
import { useRouter } from "next/router";

function Mulaitantangan() {
  const router = useRouter();
  return (
    <div>
      <hr style={{ width: "100%" }} />
      <button
        onClick={() => router.push("/isi")}
        style={{
          width: "14%",
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
        MULAI TANTANGAN +20XP
      </button>
    </div>
  );
}
export default Mulaitantangan;
