import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Products from "../pages/Products";
import Sucursales from "../pages/Sucursales";
import Others from "../pages/Others";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </Layout>
  );
}

export default App;
