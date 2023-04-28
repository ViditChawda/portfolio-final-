import '@/styles/globals.css'
import aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    aos.init({
      duration: 1000,
      initClassName: "sb-initial-anim",
      once: true,
      mirror: true,
      offset: 50,
      debounceDelay: 100,
      throttleDelay: 100,
    });
  }, []);
  return <Component {...pageProps} />
}
