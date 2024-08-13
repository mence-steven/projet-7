import React from "react";
import Accordeon from "../../composant/accordeon/accordeon";
import AboutListe from "../../../aboutListe.json"
import Paysage from "./../../assets/paysage-a-propos.png";
import "./a-propos.scss";

function APropos() {
    return (
        <>
      
        <main>
          <div className="contenaire_photo">
            <img className="photo" src={Paysage} alt="photo de paysage" />
          </div>
          <div className="contenaire_accordeon">
          {AboutListe.map((item, index) => (
            <Accordeon key={index} title={item.title} content={item.content} />
          ))}
          </div>
        </main>
      </>
    );
}
export default APropos;