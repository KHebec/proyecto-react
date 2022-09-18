import { About } from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ScrollButton from "../components/scroolbutton/ScrollButton";
import Partner from "../components/partner/Partner";
import CardToBuy from "../components/cardtobuy/CardToBuy";
import whiskey from "./../assets/images/whiskey.webp";
import gins from "./../assets/images/gins.webp";
import vodkas from "./../assets/images/vodkas.webp";

const categories = [
  {
    id: 1,
    name: "whisky",
    cite: "Puro o con hielo te alegra el alma",
    img: whiskey,
    styles: "md:flex-row-reverse",
  },
  {
    id: 2,
    name: "gin",
    cite: "Descubrí el alma del Martini y del Gin Tonic",
    img: gins,
    styles: "md:flex-row",
  },
  {
    id: 3,
    name: "vodka",
    cite: "El corazón de Bloddy Mary y de Vesper",
    img: vodkas,
    styles: "md:flex-row-reverse",
  },
];

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
        <section>
          <Partner />
        </section>
        <section>
          {categories.map((categorie) => (
            <CardToBuy
              key={categorie.id}
              img={categorie.img}
              name={categorie.name}
              style={categorie.styles}
              cites={categorie.cite}
            />
          ))}
        </section>
        <section className="mb-8">
          <About />
        </section>
        <section className="relative">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer>
        <Footer />
        <ScrollButton />
      </footer>
    </div>
  );
};

export default Home;
