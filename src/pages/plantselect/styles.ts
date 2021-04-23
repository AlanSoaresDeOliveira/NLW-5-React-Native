import {  FlatList } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontsJost from '../../styles/fonts';

import { Enviroment } from './index';
import { Plants } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const ContainerHeader = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fontsJost.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fontsJost.text};
  line-height: 20px;
`;

export const EnviromentContainer = styled.View`
`;

export const EnviromentFlatList = styled(FlatList as new () => FlatList<Enviroment>)`
  padding: 24px 24px;
`;


export const PlantsContainer = styled.View`
  flex: 1;
  padding: 0 14px;
  justify-content: center;
`;

export const PlantsFlatList = styled(FlatList as new () => FlatList<Plants>)`
  padding: 0px 20px;
  /* margin-bottom: 10px; */
`;

