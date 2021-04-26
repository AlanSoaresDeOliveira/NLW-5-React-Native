import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {SvgFromUri} from 'react-native-svg';

import waterdrop from '../../../assets/waterdrop.png';
import Button from '../../components/Button';

import { Container, ContainerPlantInf ,PlantNameText, PlantAboutText,Controller, TipContainer, TipImage, TipText, AlertText } from './styles';

export interface Plants {
  plant: {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }
  }
}

const PlantSave: React.FC = () => {

  const route = useRoute();

  const { plant } = route.params as Plants;

  return (
      <Container>
        <ContainerPlantInf>
          <SvgFromUri uri={plant.photo} height={150} width={150}/>
          <PlantNameText>
            {plant.name}
          </PlantNameText>

          <PlantAboutText>
            {plant.about}
          </PlantAboutText>
        </ContainerPlantInf>

        <Controller>
          <TipContainer>
            <TipImage source={waterdrop}/>
            <TipText>
              {plant.water_tips}
            </TipText>
          </TipContainer>

          <AlertText>
            Escolha o melhor horário para ser lembrado:
          </AlertText>
          <Button title="Cadastrar Planta" onPress={() => {}}/>
        </Controller>

      </Container>
  );
}

export default PlantSave;
