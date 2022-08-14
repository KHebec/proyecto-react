import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import "./Gallery.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div>
    <img
      src="https://jumboargentina.vtexassets.com/arquivos/ids/687345/Whisky-Ballantines-7yo-Bourbon-Finish-700ml-1-884196.jpg?v=637795965705500000"
      onDragStart={handleDragStart}
      role="presentation"
      alt="whiskey ballentines"
      className="img-gallery"
    />
    <p className="info-img">Whiskey Ballentines</p>
  </div>,
  <img
    src="https://vinotecamasis.com.ar/wp-content/uploads/2021/11/Whisky-Johnnie-Walker-Double-Black-750-ml.png"
    onDragStart={handleDragStart}
    role="presentation"
    alt="whiskey Johnnie Walker"
    className="img-gallery"
  />,
  <img
    src="https://d2r9epyceweg5n.cloudfront.net/stores/855/349/products/glenfiddich1-9e5f26f61ec2d2e19316469249991695-1024-1024.jpeg"
    onDragStart={handleDragStart}
    role="presentation"
    alt="whiskey Glenfiddich"
    className="img-gallery"
  />,
  <img
    src="https://d2r9epyceweg5n.cloudfront.net/stores/001/178/243/products/copia-de-thumb_55240_default_big1-6ad18aff1c29987d7715906069364517-1024-1024.png"
    onDragStart={handleDragStart}
    role="presentation"
    alt="whiskey Glenfiddich"
    className="img-gallery"
  />,
  <img
    src="https://jumboargentina.vtexassets.com/arquivos/ids/550204/Gin-Hiram-Walker-Dry-1-L-1-248015.jpg?v=637056691359500000"
    onDragStart={handleDragStart}
    role="presentation"
    alt="whiskey Glenfiddich"
    className="img-gallery"
  />,
  <img
    src="https://borrachines.com.ar/wp-content/uploads/2021/11/GIN-HENDRICKS-DRY-700-ML.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    alt="whiskey Glenfiddich"
    className="img-gallery"
  />,
  <img
    src="https://gobar.vteximg.com.br/arquivos/ids/155701-1000-1000/01031900007.jpg?v=636684849576800000"
    onDragStart={handleDragStart}
    role="presentation"
    alt="whiskey Glenfiddich"
    className="img-gallery"
  />,
];

const responsive = {
  0: { items: 1 },
  520: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
  1200: { items: 5 },
  1440: { items: 6 },
  2560: { items: 7 },
};

const Gallery = () => {
  return (
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
  );
};

export default Gallery;
