import React, { useState, useEffect, useCallback} from 'react'

import api from '../../service/api';

import Header from '../../components/Header';
import EnviromentButton from '../../components/EnviromentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';

import {
  Container,
  ContainerHeader,
  Title,
  SubTitle,
  EnviromentContainer ,
  EnviromentFlatList,
  PlantsContainer,
  PlantsFlatList
} from './styles';

export interface Enviroment {
  key: string;
  title: string;
}

export interface Plants {
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

const PlantSelect: React.FC = () => {

  const [enviroments, setEnviroments] = useState<Enviroment[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState<string>('all');
  const [plants, setPlants] = useState<Plants[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plants[]>([]);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api
        .get('plants_environments?_sort=title&_order=asc');

      setEnviroments([
        {
          key: 'all',
          title: 'Todos'
        },
        {
          key: 'yard',
          title: 'Quintal'
        },
        ...data
      ])
    }

    fetchEnviroment();
  },[setEnviroments]);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants1?_sort=name&_order=asc');
      // console.log(data)
      setPlants(data);
      setFilteredPlants(data)
    }

    fetchPlants();
  },[]);

  const handleSelectEnvironment = useCallback((key: string) => {
    setEnviromentSelected(key);

    if (key == 'all')
      return setFilteredPlants(plants)

    const filtered = plants.filter(plant =>
      plant.environments.includes(key)
    )
    setFilteredPlants(filtered)
  },[]);

  return (
    <Container>

      <ContainerHeader>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </ContainerHeader>

      <EnviromentContainer>

        <EnviromentFlatList
          data={enviroments}
          keyExtractor={enviroment => enviroment.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: enviroment }) => (
            <EnviromentButton
              onPress={() => handleSelectEnvironment(enviroment.key)}
              title={`${enviroment.title}`}
              active={enviroment.key === enviromentSelected}
            />
          )}
        />

      </EnviromentContainer>

      <PlantsContainer>

        <PlantsFlatList
          data={filteredPlants}
          // keyExtractor={plant => plant.id}
          // horizontal
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item: plant }) => (
            <PlantCardPrimary
              data={plant}
            />
          )}
        />

      </PlantsContainer>

    </Container>
  )
}

export default PlantSelect;
