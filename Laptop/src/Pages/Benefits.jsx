import React from "react";
import { ContainerBs, TitleBe, Textfarmes } from "./styled";
import Textfarme from "../components/Textfarme";

const cards = [
  {
    icon: "%",
    title: "Гарантия 5 месяцев",
    text: "Создавайте счёт и отправляйте контрагенту одной кнопкой",
  },
  {
    icon: "$",
    title: "Выезжаем к вам домой",
    text: "Создавайте счёт и отправляйте контрагенту одной кнопкой",
  },
  {
    icon: "!",
    title: "Более 5 лет на рынке",
    text: "Создавайте счёт и отправляйте контрагенту одной кнопкой",
  },
  {
    icon: "?",
    title: "Чиним всю технику",
    text: "Создавайте счёт и отправляйте контрагенту одной кнопкой",
  },
];

const Benefits = () => {
  return (
    <>
      <ContainerBs Backcolor="#f7f8fa">
        <TitleBe>
          <h1>Нам доверяют</h1>
          <p>
            Более 5 000 физических и юридических лиц доверили нам ремонт своей
            техники
          </p>
        </TitleBe>
        <Textfarmes>
          {cards.map((card) => (
            <Textfarme icon={card.icon} title={card.title} text={card.text} />
          ))}
        </Textfarmes>
      </ContainerBs>
    </>
  );
};

export default Benefits;
