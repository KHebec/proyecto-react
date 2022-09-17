import { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

const Carousel = () => {
  const handleDragStart = (e) => e.preventDefault();
  const data = useContext(StateContext);
  const { products } = data;

  const items = products.map((e) => (
    <Link to="/products">
      <img
        src={e.image}
        key={e.id}
        onDragStart={handleDragStart}
        alt={e.name}
        className="cursor-pointer img-gallery"
      />
    </Link>
  ));

  const responsive = {
    0: { items: 1 },
    520: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
    1440: { items: 6 },
    2560: { items: 7 },
  };
  return (
    <>
      <AliceCarousel
        className="flex justify-center"
        mouseTracking
        disableButtonsControls
        items={items}
        autoPlay
        autoPlayInterval={4000}
        infinite
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default Carousel;
