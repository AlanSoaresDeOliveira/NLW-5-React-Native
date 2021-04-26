import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {SvgFromUri} from 'react-native-svg';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import waterdrop from '../../../assets/waterdrop.png';
import Button from '../../components/Button';

import {
  Container,
  ContainerPlantInf ,
  PlantNameText,
  PlantAboutText,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertText,
  DatePickerButton,
  DatePickerButtonText
} from './styles';
import { Alert, Platform } from 'react-native';
import { format, isBefore } from 'date-fns';

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

  const [selecteddateTime, setSelecteddateTime] = useState(new Date());
  const [showDatePicker, setShoeDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();

  const { plant } = route.params as Plants;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShoeDatePicker(oldState => !oldState)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelecteddateTime(new Date());
      return Alert.alert('Escolha um hora no futuro! ⏰');
    }

    if (dateTime) {
      setSelecteddateTime(dateTime);
    }
  }

  function handleOpenDatePickerForAndroid() {
    setShoeDatePicker(oldState => !oldState);
  }

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

          { showDatePicker && (
            <DateTimePicker
              value={selecteddateTime}
              mode='time'
              display='spinner'
              onChange={handleChangeTime}
            />
          )}

          {
            Platform.OS === 'android' && (
              <DatePickerButton onPress={handleOpenDatePickerForAndroid}>
                <DatePickerButtonText>
                  {`Mudar ${format(selecteddateTime, 'HH:mm')}`}
                </DatePickerButtonText>
              </DatePickerButton>
            )
          }
          <Button title="Cadastrar Planta" onPress={() => {}}/>
        </Controller>

      </Container>
  );
}

export default PlantSave;
