import styled from 'styled-components/native';
import {Platform} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  padding: 20px 0px;
`;

export const NameView = styled.View`

`;

export const HeloText = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserNameText = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`;

export const UserImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: ${70 / 2}px;
`;
