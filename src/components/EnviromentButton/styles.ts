import styled from 'styled-components/native';
import {Platform} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  height: 40px;
  width: 76px;
  background-color: ${colors.shape};
  justify-content: center;
  align-items: center;
  border-radius: 12px;

`;

export const NameText = styled.Text`
  /* font-size: 15px; */
  color: ${colors.heading};
  font-family: ${fonts.text};
`;
