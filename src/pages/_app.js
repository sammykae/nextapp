import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "@/styles/global.css";
import { useEffect } from "react";
import { Router } from "next/router";
import nProgress from "nprogress";

export default function App({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });
  useEffect(() => {
    const start = () => {
      nProgress.start();
    };
    const end = () => {
      nProgress.done();
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
