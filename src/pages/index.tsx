import React, {useState} from 'react';
import Button from '../components/Button';

import {
  Title,
  Image,
  Description,
  CreateAccountButton,
  CreateAccountButtonText,
  SafeArea,
} from './styles';

import wateringImg from '../../assets/watering.png';

const Welcome: React.FC = () => {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <SafeArea>
      <Title>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Title>

      {visible && <Image source={wateringImg} />}

      <Description>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Description>

      {/* <CreateAccountButton
        activeOpacity={0.7}
      >
        <CreateAccountButtonText>
          >
        </CreateAccountButtonText>
      </CreateAccountButton> */}
      <Button title=">" onPress={handleVisibility} />
    </SafeArea>
  );
};

export default Welcome;
