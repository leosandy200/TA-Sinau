import "../styles/globals.css"; 
import "@picocss/pico"
import Navbar from "./komponen/navbar";


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar/> 
  <Component {...pageProps}/>
  </>);
}

export default MyApp;
