import React from "react";
import Carrousel from "../../composant/carrousel/carrousel";
import Accordeon from "../../composant/accordeon/accordeon";
import Etoile from "../../composant/etoile/etoile";
import Host from "../../composant/host/host";
import Tags from "../../composant/tags/tags";
import TitleLocation from "../../composant/titleLocation/titleLocation";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import "./fiche-logement.scss";
import NotFound from "../404/404";

function FicheLogement() {
    const { id } = useParams();

    function findAppartementById(id) {
        return data.find(appartement => appartement.id === id);
    }

    const logement = findAppartementById(id);
    console.log(logement);

    if (!logement) {
        return (
            <div>
                <NotFound />
            </div>
        );
    }

    return (
        <>
            <div className="logement_container">
                <Carrousel pictures={logement.pictures} />
                <div className="titre_profil">
                    <div className="titre_tags">
                        <TitleLocation title={logement.title} location={logement.location} />
                        <Tags tags={logement.tags} />
                    </div>
                    <div className="profil_note">
                        <Host host={logement.host} />
                        <Etoile rating={parseInt(logement.rating, 10)} />
                    </div>
                </div>
                <div className="groupes_accordeon">
                    <Accordeon title="Description" content={logement.description} />
                    <Accordeon title="Équipements" content={
                        <ul>
                            {logement.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    } />
                </div>
            </div>
        </>
    );
}

export default FicheLogement;