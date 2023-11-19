import React from "react";
import LogoHero from "../assets/Astronot.jpg";

const Hero = () => {
    return (
      <main>
        <img
          src={LogoHero}
          className="img-fluid position-absolute"
          alt=""
          style={{ width: "100%" }} />
        <div
          className="text-white position-absolute top-50 translate-left"
          style={{ marginLeft: "80px" }}
        >
          <h1>Selamat Datang Di Web Saya</h1>
          <p style={{ fontSize: "21px" }}>Hi</p>
          <p style={{ fontSize: "21px" }}>Andika Hidayat (384)</p>
        </div>
      </main>
    );
  };
  
  export default Hero;
  