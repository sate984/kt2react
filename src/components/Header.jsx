import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="logo-placeholder" alt="Велозар лого" />
        <nav className="nav">
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#rent">Аренда</a>
        </nav>
        <button className="contact-btn">Связаться</button>
      </header>
    </div>
  );
}
