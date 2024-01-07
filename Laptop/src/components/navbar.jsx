import React from "react";
import { Container, NavigationMenu, Button, Lefta } from "./styled";

const Navbar = () => {
  return (
    <>
      <Container>
        <h1>Ремонт техники</h1>
        <Lefta>
          <NavigationMenu>
            <li><a href="" target="_self" rel="noopener noreferrer">Преимущества</a></li>
            <li><a href="" target="_self" rel="noopener noreferrer">Команда</a></li>
            <li><a href="" target="_self" rel="noopener noreferrer">Услуги</a></li>
          </NavigationMenu>
          <div>
            <p>Cлужба продаж</p>
            <h3>+7 495 123-45-67</h3>
          </div>
          <Button>Заказать звонок</Button>
        </Lefta>
      </Container>
    </>
  );
};

export default Navbar;
