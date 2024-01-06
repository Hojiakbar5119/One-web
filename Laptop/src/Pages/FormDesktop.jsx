import React from "react";
import Wireles from "../assets/img/wireles.webp";
import { Container, Title } from "./styled";
import { Button, Input } from "../components/styled";

const FormDesktop = () => {
  return (
    <>
      <Container>
        <Title>
          <h1>Закажи онлайн</h1>
          <p>
            Идейные соображения высшего порядка, а также постоянный <br />
            количественный рост и сфера нашей активности
          </p>
          <form action="#" method="post">
            <Input type="text" placeholder="+7 (000) 000-0000"/>
            <Button boldtext color="#FCDF00">Оставить заявку</Button>
          </form>
          <h5>
            Оставляя заявку, вы соглашаетесь на обработку персональных данных и
            с условиями бронирования счёта
          </h5>
        </Title>
        <img src={Wireles} alt="Wireles" />
      </Container>
    </>
  );
};

export default FormDesktop;
