import React from 'react';
import Home from "../containers/Home/Home";
import About from "../containers/About/About";
import Catalogue from "../containers/Catalogue/Catalogue/Catalogue";
import RightLine from "../containers/Catalogue/CataloguePages/RightLine";

const Routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/catalogue": () => <Catalogue />,
  "/rightline": () => <RightLine />,
};

export default Routes;