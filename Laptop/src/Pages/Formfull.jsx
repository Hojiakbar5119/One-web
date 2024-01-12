import React from "react";
import { Container, Title } from "./styled";
import { Button, Input, Label, Radio, Form } from "../components/styled";
import desktopimg from "../assets/img/Desktop.webp";

const Formfull = () => {
  return (
    <Container>
      <Title>
        <h1>Закажите ремонт техники</h1>
        <p>Заполните форму и закажите полис</p>
        <Form action="#">
          <Input placeholder="Ваша имя" type="text" required />
          <Input type="number" placeholder="+998 (00) 000-00-00" required />
          <Input type="email" placeholder="E-mail" required />
          <p>Какой полис вас интересует</p>
          <div>
            <Radio name="selected" type="radio" id="html" value="КАСКО" />
            <Label for="html">КАСКО</Label>
          </div>
          <div>
            <Radio name="selected" type="radio" id="css" value="ОСАГО" />
            <Label for="css">ОСАГО</Label>
          </div>
          <div>
            <Radio
              name="selected"
              type="radio"
              id="javascript"
              value="Страхование жизни"
            />
            <Label for="javascript">Страхование жизни</Label>
          </div>
          <Button color="#FCDF00">Заказать полис</Button>
        </Form>
      </Title>
      <img src={desktopimg} alt={desktopimg} />
    </Container>
  );
};

export default Formfull;
