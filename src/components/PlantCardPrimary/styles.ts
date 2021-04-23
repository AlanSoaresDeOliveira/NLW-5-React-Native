import styled from 'styled-components/native';
import {SvgFromUri} from 'react-native-svg';
import {Platform} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  /* height: 50px; */
  background-color: ${colors.shape};
  border-radius: 10px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const Image = styled(SvgFromUri)`
  /* height: 70px;
  width: 70px; */
  margin: 50px 0;
`;

export const NameText = styled.Text`
  /* font-size: 15px; */
  color:  ${colors.green_dark};
  font-family: ${fonts.heading};
  margin: 20px 0;

`;


