import React from "react";
import { ContainerBs, Partnerslogo, Textfarmes, TitleBe } from "./styled";
import dell from '../assets/img/kaps.svg'
import lenovo from '../assets/img/lap.svg'
import medium from '../assets/img/Mlogo.svg'
import intel from '../assets/img/phone.svg'

const Partners = () => {
  return (
    <>
      <ContainerBs>
        <TitleBe>
          <h1>Ремонт всех марок</h1>
          <Textfarmes>
            <Partnerslogo src={dell} alt="dell" />
            <Partnerslogo src={lenovo} alt="lenovo" />
            <Partnerslogo src={medium} alt="medium" />
            <Partnerslogo src={intel} alt="intel" />
          </Textfarmes>
        </TitleBe>
      </ContainerBs>
    </>
  );
};

export default Partners;
