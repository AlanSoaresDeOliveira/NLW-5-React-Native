import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontsJost from '../../styles/fonts';

const {width} = Dimensions.get('window')

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const TitleText = styled.Text`
  font-size: 22px;
  text-align: center;
  line-height: 38px;
  color: ${colors.heading};
  font-family: ${fontsJost.heading};
  margin-top: 15px;
`;

export const SubTitleText = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fontsJost.text};
  padding: 20px 20px;
`;

export const Footer = styled.View`
  /* flex: 1; */
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
`;
