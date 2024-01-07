import React from "react";
import { Frame } from "./styled";


const Team = ({ images, fullname, specialize }) => {
  return (
    <>
      <Frame textsize>
       <img src={images} alt={images} />
        <h1>{fullname}</h1>
        <p>{specialize}</p>
      </Frame>
    </>
  );
};

export default Team;
