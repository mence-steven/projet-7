import React from "react";
import { Link } from "react-router-dom";
import dataCards from "../../../data.json";
import "./cards.scss";

function Card() {
    return (
      <div className="cards">
          {dataCards.map((flat) => (
        <div className="card" key={flat.id}>
            <Link to={`/fiche-logement/${flat.id}`} className="contenaire_logement_photo_titre" key={flat.id}>
              <img src={flat.cover} alt={flat.title} className="logement_photo" />
              <div className="contenaire_logement_titre">
                <p className="logement_titre">{flat.title}</p>
              </div>
            </Link>
        </div>
          ))}
      </div>
    );
  };
  
  export default Card;