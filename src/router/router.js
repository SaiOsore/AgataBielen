import React from 'react';
import Home from "../containers/Home/Home";
import About from "../containers/About/About";
import Catalogue from "../containers/Catalogue/Catalogue/Catalogue";
import RightLine from "../containers/Catalogue/CataloguePages/RightLine";
import NatureLine from "../containers/Catalogue/CataloguePages/NatureLine";

const Routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/catalogue": () => <Catalogue />,
  "/rightline": () => <RightLine />,
  "/natureline": () => <NatureLine />,
};

export default Routes;