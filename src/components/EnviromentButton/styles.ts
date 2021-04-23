import styled from 'styled-components/native';
import {Platform} from 'react-native';
import colors from '../../styles/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface EnviromentButtonProps {
  active?: boolean;
}

interface EnviromentButtonTextProps {
  active?: boolean;
}

export const Button = styled(RectButton)<EnviromentButtonProps>`
  height: 40px;
  width: 76px;
  background-color: ${({active}) => active ? colors.green_light : colors.shape};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;

`;

export const NameText = styled.Text<EnviromentButtonTextProps>`
  /* font-size: 15px; */
  color:  ${({active}) => active ? colors.green_dark : colors.heading};
  font-family: ${fonts.heading};
`;
