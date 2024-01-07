import React from 'react'
import { ContainerBs, TitleBe } from './styled'
import Card from '../components/Card'

const Service = () => {
  return (
    <>
        <ContainerBs Backcolor>
            <TitleBe whitetext >
                <h1>Пакеты услуг</h1>
                <p>Выберите подходящий пакет услуг</p>
            </TitleBe>
            <Card></Card>
        </ContainerBs>
    </>
  )
}

export default Service