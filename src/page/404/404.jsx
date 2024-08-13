import React from "react";
import { NavLink } from "react-router-dom";
import "./404.scss";

function NotFound() {
    return (
        <>   
        <main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="lien_home">
            Retourner sur la page d'Accueil
            </NavLink>
        </main>
        </>
    );
}
export default NotFound;