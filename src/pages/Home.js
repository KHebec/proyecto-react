import Partner from "../components/banner/Partner";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ScrollButton from "../components/scroolbutton/ScrollButton";

const Home = () => {
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
        <section className="partner"></section>
        <Partner />
        <section className="carousel">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        <ScrollButton />
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
