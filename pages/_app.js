import '../styles/globals.css'
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
