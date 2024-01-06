import React from "react";
import { Container, NavigationMenu, Button, Left } from "./styled";

const Navbar = () => {
  return (
    <>
      <Container>
        <h1>Ремонт техники</h1>
        <Left>
          <NavigationMenu>
            <li>Преимущества</li>
            <li>Команда</li>
            <li>Услуги</li>
          </NavigationMenu>
          <div>
            <p>Cлужба продаж</p>
            <h3>+7 495 123-45-67</h3>
          </div>
          <Button>Заказать звонок</Button>
        </Left>
      </Container>
    </>
  );
};

export default Navbar;
