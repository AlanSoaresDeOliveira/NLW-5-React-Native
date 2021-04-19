import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const CustomButton = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
  padding: 0 12px;
`;

export const CustomButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;
