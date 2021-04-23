import React from 'react';
import {} from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from '../../../assets/load.json';

import { Container, Lottie} from './styles';

const Load: React.FC = () => {
  return (
    <Container>
      <Lottie
        source={loadAnimation}
        autoPlay
        loop
      />
    </Container>
  );
}


export default Load;
