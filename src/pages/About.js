import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutus/AboutUs";

const About = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="mb-16">
        <AboutUs />
      </section>
      <footer className="pt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
