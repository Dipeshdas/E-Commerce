import { React } from "react";
import "./Footer.css";
// import logo from "../Assests/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <Link className="social-icon__link" to="https://www.facebook.com/dipesh.das.1614460?sfnsn=wiwspwa&mibextid=RUbZ1f">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="https://x.com/DipeshD67742864?s=09">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="https://www.linkedin.com/in/dipesh-das-283b62200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="https://www.instagram.com/dipesh1321?igsh=cXJpczBmZjlsejJo">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="https://github.com/Dipeshdas">
              <ion-icon name="logo-github"></ion-icon>
            </Link>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="#">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Services
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Team
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="#">
              Contact
            </Link>
          </li>
        </ul>
        <p>&copy;2024| All Rights Reserved</p>
      </footer> 
    </>
  );
};
