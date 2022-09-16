import BuyProducts from "../components/buyproducts/BuyProducts";
import Navbar from "../components/navbar/Navbar";

const Products = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </header>
      <section className="mt-24">
        <BuyProducts />
      </section>
      <footer></footer>
    </div>
  );
};

export default Products;
