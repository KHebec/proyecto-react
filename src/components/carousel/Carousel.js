import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import "./Carousel.css";
import data from "../../db/db.json";

const handleDragStart = (e) => e.preventDefault();

const items = data.map((e) => (
  <div>
    <img
      src={e.image}
      key={e.id}
      onDragStart={handleDragStart}
      alt={e.brand}
      className="img-gallery"
    />
    <p className="info-product">{e.brand}</p>
    <p className="product-content">{e.content * 1000} ml</p>
    <p className="product-price">$ {e.price}</p>
  </div>
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

const Carousel = () => {
  return (
    <>
      <AliceCarousel
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
