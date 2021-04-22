import React from 'react'
import {View, Text} from 'react-native';

import Header from '../../components/Header';
import EnviromentButton from '../../components/EnviromentButton';

import {Container, ContainerHeader,Title, SubTitle} from './styles';

const PlantSelect: React.FC = () => {

  return (
    <Container>
      <ContainerHeader>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </ContainerHeader>
      <EnviromentButton title="Cozinha"/>
    </Container>
  )
}

export default PlantSelect;
