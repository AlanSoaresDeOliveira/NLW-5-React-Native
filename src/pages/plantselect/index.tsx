import React, { useState, useEffect, useCallback} from 'react';
import { ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../service/api';

import Header from '../../components/Header';
import EnviromentButton from '../../components/EnviromentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

import colors from '../../styles/colors';

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
  const [name, setName] = useState<string>();
  const [enviroments, setEnviroments] = useState<Enviroment[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState<string>('all');
  const [plants, setPlants] = useState<Plants[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plants[]>([]);
  const [load, setLoad] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function loadStorageUserName() {
      try {
        const userName = await AsyncStorage.getItem('@plantmanager:user');
        setName(userName || '');
      } catch (error) {
        console.log(error);
      }
    }
    loadStorageUserName();
  },[]);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api
        .get('plants_environments?_sort=title&_order=asc');

      setEnviroments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEnviroment();
  },[setEnviroments]);

  useEffect(() => {
    fetchPlants();
  },[setLoad, setFilteredPlants, setPlants, setLoadingMore]);

  async function fetchPlants() {
    const { data } = await api.get(`plants1?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data)
      return setLoad(true);

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    console.log("Plants", plants)
    setLoad(false)
    setLoadingMore(false)
  }

  const handleSelectEnvironment = useCallback((key: string) => {
    console.log(key)
    setEnviromentSelected(key);

    if (key == 'all')
      return setFilteredPlants(plants)

    console.log("Plants", plants)
    const filtered = plants.filter(plant =>
      plant.environments.includes(key)
    )
    console.log(filtered)
    setFilteredPlants(filtered)
  },[plants]);

  function handlerFetchMore(distance: number) {
    if (distance < 1)
      return;

      setLoadingMore(true);
      setPage(oldValue => oldValue + 1);
      fetchPlants();
  }

  if (load)
    return <Load />
  return (
    <Container>

      <ContainerHeader>
        <Header name={name || ''}/>
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
          keyExtractor={(key) => String(key.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd}) =>
            handlerFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore
            ? <ActivityIndicator color={colors.green}/>
            : <></>
          }
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
