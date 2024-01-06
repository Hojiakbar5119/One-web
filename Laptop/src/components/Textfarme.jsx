import React from "react";
import { Frame, Circle } from "./styled";

const Textfarme = ({icon,title,text}) => {
  return (
    <Frame>
      <Circle>{icon}</Circle>
      <h1>{title}</h1>
      <p>{text}</p>
    </Frame>
  );
};

export default Textfarme;
