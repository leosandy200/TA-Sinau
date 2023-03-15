import "../styles/globals.css";
import "@picocss/pico"
import Navbar from "./component/navbar/navbar";
import { ProfileContext } from "../utils/context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const disabled = {
  "/": true,
  "/register": true
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [dataUser, setDataUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      if (disabled[router.pathname]) return;

      router.push("/login")
      return;
    }
    if (!loaded) {
      setLoaded(true);
      return;
    }

    setDataUser(JSON.parse(localStorage.getItem("data")))
  }, [loaded])

  return (
    <ProfileContext.Provider value={[dataUser, setDataUser]}>
      <Navbar />
      <Component {...pageProps} />
    </ProfileContext.Provider>);
}

export default MyApp;
