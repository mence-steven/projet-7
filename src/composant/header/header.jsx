import React from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo-kasa-header.png";
import "./header.scss";

function Header() {
    return (
        <header className="header">
            <img className="logo_kasa" src={logoHeader} alt="Logo Kasa orange" />
            <nav className="navigation">
                <NavLink
                    className={(state) => (state.isActive ? "link active" : "link")}
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={(state) => (state.isActive ? "link active" : "link")}
                    to="/a-propos"
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
