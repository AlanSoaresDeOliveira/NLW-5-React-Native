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

export const KeyBoardAvoid = styled.KeyboardAvoidingView.attrs({

})`
  flex: 1;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  color: ${colors.heading};
  font-family: ${fontsJost.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  color: black;
  border-color: ${colors.gray};

  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;


export const ContainerOfButton = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;
