import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontsJost from '../../styles/fonts';

const {width} = Dimensions.get('window')

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
