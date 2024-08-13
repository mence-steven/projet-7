import React from "react";
import { NavLink } from "react-router-dom";
import Payasage from "../../assets/paysage.png";
import "./bandeau.scss";

function Bandeau() {
    return (
        <div className="bandeau_contenaire_paysage">
            <img src={Payasage} alt="photo de paysage" />
            <div className="bandeau_contenaire_texte">
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
}

export default Bandeau;
