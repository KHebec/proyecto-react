import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutus/AboutUs";

const About = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <AboutUs />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
