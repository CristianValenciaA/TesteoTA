import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import Hero from "../componentsPerfil/Hero";
import InfoSection from "../componentsAdmin/InfoSection";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsAdmin/dataAdmin/InfoData";
import { SliderData } from "../componentsAdmin/dataAdmin/SliderData";
import GlobalStyle from "../globalStyles";

function adminPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default adminPage;