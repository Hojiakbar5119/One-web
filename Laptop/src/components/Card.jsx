import React from "react";
import { Button, Carddes } from "./styled";

const Card = ({ cost, text, alltext }) => {
  return (
    <>
      <Carddes>
        <div>
          <h1>{cost}</h1>
          <h3>{text}</h3>
          <p>{alltext} </p>
        </div>
        <Button color="#FCDF00">Рассчитать</Button>
      </Carddes>
    </>
  );
};

export default Card;
