import { About } from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ScrollButton from "../components/scroolbutton/ScrollButton";
import Partner from "../components/partner/Partner";

const Home = () => {
  return (
    <div>
      {/* logo, navbar y carrito de compras */}
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <section className="relative">
          <Hero />
        </section>

        <section className="relative">
          <Carousel />
        </section>
        <section>
          <Partner />
        </section>
        <section>
          <About />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        <Footer />
        <ScrollButton />
      </footer>
    </div>
  );
};

export default Home;
