import React from 'react';

import {Container, Title, Image, Description, CreateAccountButton, CreateAccountButtonText} from './styles';

import wateringImg from '../../assets/watering.png'

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>
        Gerencie duas plantas de forma fácil
      </Title>
      <Image  source={wateringImg}/>
      <Description>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Description>
      <CreateAccountButton>
        <CreateAccountButtonText>
          >
        </CreateAccountButtonText>
      </CreateAccountButton>

    </Container>
  )
}

export default Welcome;