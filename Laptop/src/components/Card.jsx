import React from "react";
import { Button, Carddes } from "./styled";

const Card = () => {
  return (
    <>
      <Carddes>
        <div>
          <h1>0 ₽</h1>
          <h3>Диагностика вашей техники</h3>
          <p>
            Проведём полную диагностику вашей техники. Вы можете привезти
            технику в наш офис, либо мы сами заберём её из вашего дома или офиса
          </p>
        </div>
        <Button color="#FCDF00">Рассчитать</Button>
      </Carddes>
    </>
  );
};

export default Card;
