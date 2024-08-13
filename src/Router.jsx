import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/home/home";
import FicheLogement from "./page/fiche-logement/fiche-logement";
import APropos from "./page/a-propos/a-propos";
import NotFound from "./page/404/404";
import Header from "./composant/header/header";
import Footer from "./composant/footer/footer";



function Router() {
    return (
        <BrowserRouter>
        <div className="content">
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    );
  }
  
  export default Router;