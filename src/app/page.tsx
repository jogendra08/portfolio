"use client"

import styles from './page.module.css'
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import Index from './components/Header/index'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";
import "./globals.css"
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function Home() {

  useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
    <Index/>
    {/* <Header/> */}
    <h1>lorem5000</h1>
    {/* <Footer/> */}
    </>
  )
}
