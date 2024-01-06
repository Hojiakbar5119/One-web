import React from "react";
import Navbar from "../components/navbar";
import Laptop1 from "../assets/img/header1.webp";
import { Container, Title } from "./styled";
import { Button } from "../components/styled";
const Desktop = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>
          <h1>Ремонт ноутбуков <br /> в вашем городе</h1>
          <p>
            Ремонт ноутбуков и другой техники в вашем городе по самым низким
            ценам
          </p>
          <div>
            <Button color="#FCDF00">Оставить заявку</Button>
            <Button>Узнать подробности</Button>
          </div>
          <h5>
            Оставьте заявку прямо сейчас и получите в подарок бесплатную
            диагностику с выездом на дом
          </h5>
        </Title>
        <img src={Laptop1} alt="Laptop" />
      </Container>
    </>
  );
};

export default Desktop;
