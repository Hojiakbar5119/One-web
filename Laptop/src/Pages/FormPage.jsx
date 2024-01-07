import React from 'react'
import { Container, Title } from './styled'
import serivice from '../assets/img/phone.webp'
import { Button, Input } from '../components/styled'

const FormPage = () => {
  return (
    <Container>
        <Title>
            <h1>Свяжитесь с нами</h1>
            <p>Оставьте заявку на банковскую гарантию</p>
            <form action="#">
                <Input type='text' placeholder='Ваша имя' required/>
                <Input type='number' placeholder="+998 (00) 000-00-00" required/>
                <Input type='email' placeholder='E-mail' required/>
                <Button textcolor color="#FF3A23">Оставить заявку</Button>
            </form>
        </Title>
         <img src={serivice} alt="phone" />
    </Container>
  )
}

export default FormPage