import React from 'react';
import {
  Title,
  Image,
  Description,
  CreateAccountButton,
  SafeArea,
  Wrapper,
} from './styles';

import wateringImg from '../../../assets/watering.png';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';

const Welcome: React.FC = () => {

  return (
    <SafeArea>
      <Wrapper>
        <Title>
          Gerencie {'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Title>

        <Image source={wateringImg} resizeMode="contain"/>

        <Description>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Description>

        <CreateAccountButton
          activeOpacity={0.7}
        >
          <Icon name="chevron-right" size={32} color={colors.white} />
        </CreateAccountButton>
      </Wrapper>
    </SafeArea>
  );
};

export default Welcome;
