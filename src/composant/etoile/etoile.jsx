import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./etoile.scss";

function Etoile({ rating }) {
  const totalStars = 5;

  return (
    <div className="star">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < rating ? "allumer" : "eteinte"}
        />
      ))}
    </div>
  );
}

export default Etoile;
