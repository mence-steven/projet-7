import React from "react";
import logoFooter from "../../assets/logo-kasa-footer.png";
import "./footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Logo kasa noir" />
            <p>© 2020 Kasa. All rights reserved</p>

        </footer>
    )
}

export default Footer;