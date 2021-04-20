import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fontsJost from '../../styles/fonts';

const {width} = Dimensions.get('window')

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${fontsJost.heading};
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  line-height: 34px;
`;

export const Image = styled.Image.attrs({

})`
  height: ${width * 0.7}px;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0px 20px;
  color: ${colors.heading};
  font-family: ${fontsJost.text};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;
