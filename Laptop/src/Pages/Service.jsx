import React from "react";
import { ContainerBs, Textfarmes, TitleBe } from "./styled";
import Card from "../components/Card";


const Servicetext = [
  {
    cost: "0 ₽",
    text: "Диагностика вашей техники",
    alltext:
      "Проведём полную диагностику вашей техники. Вы можете привезти технику в наш офис, либо мы сами заберём её из вашего дома или офиса",
  },
  {
    cost: "от 990 ₽",
    text: "Ремонт ноутбуков",
    alltext:
      "- Замена дисплея- Установка оперативной памяти- Установка ОС- Чистка от вирусов- Установка программного обеспеченияи т. д.",
  },
  {
    cost: "от 495 ₽",
    text: "Ремонт другой электроники",
    alltext:
      "- Ремонт зарядных устройств - Замена дисплеев - Пайка микросхем - Установка комплектующих - Ремонт портативных компьютеров, ПК - Ремонт роутеров и т. д.",
  },
];

const Service = () => {
  return (
    <>
      <ContainerBs Backcolor>
        <TitleBe whitetext>
          <h1>Пакеты услуг</h1>
          <p>Выберите подходящий пакет услуг</p>
        </TitleBe>
      <Textfarmes>
        {Servicetext.map((serive)=>(  <Card cost={serive.cost} text={serive.text} alltext={serive.alltext} />))}
      </Textfarmes>
      </ContainerBs>
    </>
  );
};

export default Service;
