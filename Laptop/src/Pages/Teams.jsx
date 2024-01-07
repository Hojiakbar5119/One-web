import React from "react";
import { ContainerBs, Textfarmes, TitleBe } from "./styled";
import Team from "../components/Team";
import img1 from './../assets/img/Ellipse 10.webp'
import img2 from '../assets/img/Ellipse 11.webp'
import img3 from '../assets/img/Ellipse 12.webp'
const users = [
  {
    images: "img1",
    fullname: "Юрий Гагарин",
    specialize: "Ремонтирую ноутбуки",
  },

  {
    images: "img2",
    fullname: "Михаи́л Фёдорович",
    specialize: "Устанавливаю ПО",
  },

  {
    images: "img3",
    fullname: "Григо́рий Ефи́мович",
    specialize: "Чиню приставки",
  },
];

const Teams = () => {
  return (
    <>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
      <ContainerBs>
        <TitleBe>
          <h3>Лучшие в совем деле</h3>
          <h1>Наша команда</h1>
          <p>Вот уже 12 лет мы помогаем вашей техники служить долго</p>
        </TitleBe>
        <Textfarmes>
          {users.map((user) => (
            <Team
              // images={user.images}
              fullname={user.fullname}
              specialize={user.specialize}
            />
          ))}
        </Textfarmes>
      </ContainerBs>
    </>
  );
};

export default Teams;
