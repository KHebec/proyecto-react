import BuyProducts from "../components/buyproducts/BuyProducts";
import Navbar from "../components/navbar/Navbar";

const Products = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <section>
        <BuyProducts />
      </section>
      <footer></footer>
    </div>
  );
};

export default Products;
