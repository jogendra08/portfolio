import React from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import image from "../../images/jogendra3.jpg"

// for brand icons
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const Index = () => {
  return (
    <div>
        <div className="topBar">
        <div className="container-fluid contact">
          <div
            className="row"
            style={{ backgroundColor: "#000000", height: "30px" }}
          >
            <div className="text-center col-lg-4 col-md-4">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#c5ccd7" }} />
                <span> </span>
                <a
                  href="tel:+91-8005627811"
                  // style={{ color: "#c5ccd7", borderBottom: "1px dashed #504c4c", textDecoration: 'none' }}
                >
                  +91-8005627811&nbsp;
                </a>
                <span style={{ color: "#c5ccd7" }}>(India)</span>
              </div>
            </div>
            <div className="text-center col-lg-4 col-md-4">
              <div className="contact-item">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#c5ccd7" }}
                />
                <span> </span>
                <a
                  href="mailto:sales@smartworldinsights.com"
                  // style={{ color: "#c5ccd7" ,textDecoration: 'none', borderBottom: "1px dashed #504c4c",}}
                >
                  jogendrasinghbhati96870@gmail.com
                </a>
              </div>
            </div>
            <div className="text-center col-lg-4 col-md-4">
              <div className="contact-item">
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#c5ccd7" }} />
                <span> </span>
                <a
                  href="tel:+91-7742680702"
                  // style={{ color: "#c5ccd7", textDecoration: 'none', borderBottom: "1px dashed #504c4c", }}
                >
                  +91-7742680702&nbsp;
                </a>
                <span style={{ color: "#c5ccd7" }}>(India)</span>
              </div>
            </div>
            {/* <FontAwesomeIcon icon={faArrowAltCircleDown} /> */}
          </div>
        </div>
      </div>
      <div className="navbar" id="navbar">
        <div className="nav-items ms-4 col-md-4">
          <a href="#" className="navLink" style={{fontSize:"1.3rem"}}>Home</a>

          <a href="#" className="navLink" style={{fontSize:"1.3rem"}}>About</a>

          <a href="#" className="navLink" style={{fontSize:"1.3rem"}}>Projects</a>

          <a href="#" className="navLink" style={{fontSize:"1.3rem"}}>Contact</a>
        </div>
        <div className="logo d-flex justify-content-center col-md-4"  style={{fontSize:"1.5rem"}}>
        <Image
      src={image}
      alt="Picture of the author"
      width={70}
      height={70}
      style={{borderRadius:"100%"}}
	  // quality={100}
    />
        </div>
        <div className="social-icons d-flex justify-content-end col-md-3">
        <FontAwesomeIcon style={{color:"#00acee", marginRight:"2rem", fontSize:"1.5rem"}} icon={faTwitter} />
        <FontAwesomeIcon style={{color:"#e40c59", marginRight:"2rem", fontSize:"1.5rem"}} icon={faInstagram} />
        <FontAwesomeIcon style={{color:"#0072b1", marginRight:"2rem", fontSize:"1.5rem"}} icon={faLinkedin} />
        <FontAwesomeIcon style={{color:"#4078c0", marginRight:"2rem", fontSize:"1.5rem"}} icon={faGithub} />
        </div>
      </div>
    </div>
  );
};

export default Index;
