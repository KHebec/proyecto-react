import React from "react";
import Carousel from "./../components/carousel/Carousel";
import "./Layout.css";
import { Button } from "../components/button/Button";
import Footer from "../components/footer/Footer";
import ScrollButton from "../components/scroolbutton/ScrollButton";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <div className="container">
      {/* logo, navbar y carrito de compras */}
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        {/* Hero */}
        <section className="hero"></section>
        {/* Cards */}
        <section className="cards"></section>
        {/* About */}
        <section className="about"></section>
        {/* carousel */}
        <section className="carousel">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
