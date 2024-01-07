import React from "react";
import img1 from "../assets/img/03.webp";
import img2 from "../assets/img/01.webp";
import img3 from "../assets/img/image.webp";
import { Mediadesign } from "./styled";
const Media = () => {
  return (
    <Mediadesign>
      <img src={img1} alt="sd" />
      <div>
        <img src={img2} alt="sd" />
        <img src={img3} alt="sd" />
      </div>
    </Mediadesign>
  );
};

export default Media;
