import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/Navbar";
import ScrollButton from "../components/scroolbutton/ScrollButton";
import BuyProducts from "../components/buyproducts/BuyProducts";
const Home = () => {
  return (
    <div className="container">
      {/* logo, navbar y carrito de compras */}
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <section className="hero"></section>
        {/* Cards */}
        <section className="cards">
          <BuyProducts />
        </section>
        {/* About */}
        <section className="partner"></section>

        <section className="carousel">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        <ScrollButton />
      </footer>
    </div>
  );
};

export default Home;
