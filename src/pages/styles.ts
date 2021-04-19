import styled from 'styled-components/native';
import colors from '../styles/colors';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const Image = styled.Image``;

export const Description = styled.Text`
  text-align: center;
  font-size: 18;
  padding: 0px 20px;
  color: ${colors.heading};
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
