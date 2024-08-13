import React, { useState } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./carrousel.scss";

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  
  const imageApres = () => {
    setCurrentIndex((imageChange) => (imageChange + 1) % pictures.length);
  };

  const imageAvant = () => {
    setCurrentIndex((imageChange) => (imageChange - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carrousel">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel_image" />
      <div className="chevron">
        <FontAwesomeIcon icon={faChevronLeft} className="chevron_gauche" onClick={imageAvant} />
        <FontAwesomeIcon icon={faChevronRight} className="chevron_droite" onClick={imageApres} />
      </div>
      <div className="carrousel_nombre">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Carrousel;
